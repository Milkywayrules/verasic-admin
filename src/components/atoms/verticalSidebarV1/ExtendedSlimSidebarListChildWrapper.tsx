import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
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
  const location = useLocation()

  const addElement = useSidebarMenuStore(state => state.addElementToObj)
  const objOfElement = useSidebarMenuStore(state => state.objOfElement)
  const setElementValue = useSidebarMenuStore(state => state.setElementValue)

  const [objOfElementWithID] = useState(objOfElement[id])

  const ulRef = useRef<HTMLUListElement>(null)

  // TODO; maybe should rework this piece of sh*t
  let [URLFirstSegment] = useState('')
  let [URLFirstSegmentOnFirstChild] = useState('')

  // TODO; maybe should rework this piece of sh*t
  if ('to' in items[0]) {
    URLFirstSegment = location.pathname.split('/', 2)[1]
    // we assume the children has the same prefix url and it should be match with the parent button
    URLFirstSegmentOnFirstChild = items[0].to.split('/', 2)[1]
  }

  // what should we do on first render
  useEffect(() => {
    addElement(id, URLFirstSegment === URLFirstSegmentOnFirstChild)
    // eslint-disable-next-line
  }, [])

  // what should we do when changing route
  useEffect(() => {
    URLFirstSegment !== URLFirstSegmentOnFirstChild && setElementValue(id, false)
    // eslint-disable-next-line
  }, [URLFirstSegment, URLFirstSegmentOnFirstChild])

  // what should we do when the state of objOfElement changes
  useEffect(() => {
    if (objOfElementWithID) {
      ulRef.current?.classList.add('flex')
      ulRef.current?.classList.remove('hidden')
    } else {
      ulRef.current?.classList.add('hidden')
      ulRef.current?.classList.remove('flex')
    }
  }, [objOfElementWithID])

  return (
    <ul ref={ulRef} className={'flex flex-col rounded-b bg-gray-300 py-2 shadow-inner'}>
      {items.map(item => children(item))}
    </ul>
  )
}

export default ExtendedSlimSidebarListChildWrapper
