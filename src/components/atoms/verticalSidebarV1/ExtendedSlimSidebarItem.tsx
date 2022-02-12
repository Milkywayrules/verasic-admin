import { ChevronRightIcon } from '@heroicons/react/outline'
import { FC, ReactNode, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { usePrepUtils } from 'src/helpers/menuUtils'
import { useSidebarMenuStore } from 'src/store/sidebarMenuStore'
import { NavLinkOrButtonProps } from './SlimSidebarItem'

interface Props {
  id: string | number
  to: string
  elementClass?: string
  wrapperClass?: string
  innerChildren?: ReactNode
  outerChildren?: ReactNode
}

/**
 *
 */
const NavLinkOrButton: FC<NavLinkOrButtonProps> = ({ id, to, className, children, title = '' }) => {
  className +=
    ' ' +
    'w-full flex items-center gap-[18px] rounded-[3px] border-2 border-transparent py-1.5 px-3 outline-none hover:bg-gray-200 focus-visible:border-blue-500 active:border-transparent active:bg-blue-100 active:text-blue-700'

  const setActiveStateByID = useSidebarMenuStore(state => state.setActiveStateByID)
  const activeState = useSidebarMenuStore(state => state.getActiveStateByID(id))

  const btnRef = useRef<HTMLButtonElement>(null)

  const [idForBtn, URLFirstSegment, isMatchBtnWithFirstSegment] = usePrepUtils(to)

  // what should we do when changing route
  useEffect(() => {
    setActiveStateByID(id, isMatchBtnWithFirstSegment)
  }, [isMatchBtnWithFirstSegment, URLFirstSegment, setActiveStateByID, id])

  return idForBtn ? (
    <button
      ref={btnRef}
      onClick={() => setActiveStateByID(id, !activeState)}
      title={title}
      className={
        className +
        (activeState
          ? ' bg-blue-800 text-white hover:bg-blue-700 focus-visible:border-dotted focus-visible:border-blue-200 focus-visible:bg-blue-700'
          : '')
      }
    >
      {children}
      <ChevronRightIcon
        className={
          'h-4 w-4 flex-shrink-0 transform transition-transform' +
          (activeState ? ' rotate-90 ' : ' rotate-0 ')
        }
      />
    </button>
  ) : (
    <NavLink
      to={to}
      title={title}
      className={({ isActive }) => className + (isActive ? ' bg-gray-200' : '')}
    >
      {children}
    </NavLink>
  )
}

/**
 *
 */
const ExtendedSlimSidebarItem: FC<Props> = ({
  id,
  to,
  elementClass,
  wrapperClass,
  children,
  innerChildren,
  outerChildren,
}) => {
  return (
    <>
      <li className={wrapperClass}>
        <NavLinkOrButton id={id} to={to} className={elementClass ?? ''}>
          {children}
        </NavLinkOrButton>
        {innerChildren}
      </li>
      {outerChildren}
    </>
  )
}

export default ExtendedSlimSidebarItem
