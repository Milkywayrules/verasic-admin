import { useEffect, useRef } from 'react'
import { usePrepUtils } from 'src/helpers/menuUtils'
import { useSidebarMenuStore } from 'src/store/sidebarMenuStore'

interface Props<T> {
  id: string | number
  items: T[]
  children: (item: T) => JSX.Element
}

/**
 *
 */
const ExtendedSlimSidebarListChildWrapper = <T extends { to: string }>({
  id,
  items,
  children,
}: Props<T>) => {
  const setActiveStateByID = useSidebarMenuStore(state => state.setActiveStateByID)
  const activeState = useSidebarMenuStore(state => state.getActiveStateByID(id))

  const ulRef = useRef<HTMLUListElement>(null)

  // Since this is the wrapper (container) and don't have "to" prop.
  // We mock the "to" using it's first child (items[0]).
  // We assume (and it should be when you define data item for menu)
  // that "this" wrapper children, all has the same URLFirstSegment,
  // so do "this" wrapper that act as a parent element.
  const to = `/#${items[0].to.split('/', 2)[1]}`
  const [, URLFirstSegment, isMatchBtnWithFirstSegment] = usePrepUtils(to)

  // what should we do when changing route
  useEffect(() => {
    setActiveStateByID(id, isMatchBtnWithFirstSegment)
  }, [isMatchBtnWithFirstSegment, URLFirstSegment, setActiveStateByID, id])

  return (
    <ul
      ref={ulRef}
      className={
        'flex-col rounded-b py-2 shadow-inner' + (activeState ? ' flex bg-gray-300' : ' hidden')
      }
    >
      {items.map(item => children(item))}
    </ul>
  )
}

export default ExtendedSlimSidebarListChildWrapper
