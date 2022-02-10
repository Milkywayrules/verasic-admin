import { ChevronRightIcon } from '@heroicons/react/outline'
import { FC, ReactNode, useEffect, useState } from 'react'
import { Location, NavLink, useLocation } from 'react-router-dom'
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
// TODO; maybe should rework this piece of sh*t
const prepUtils = (to: string, location: Location): [string | false, string, boolean] => {
  // a menu with button should have a children and should not redirect to any link/url
  const isStartWithHashtag = to.startsWith('#', 1)

  // these two are for checking the current url is match with the current btn
  const idForBtn = isStartWithHashtag && to.split('#', 2)[1]
  const URLFirstSegment = location.pathname.split('/', 2)[1]

  return [idForBtn, URLFirstSegment, idForBtn === URLFirstSegment]
}

/**
 *
 */
const NavLinkOrButton: FC<NavLinkOrButtonProps> = ({ id, to, className, children, title = '' }) => {
  className +=
    ' ' +
    'w-full flex items-center gap-[18px] rounded border-2 border-transparent py-1.5 px-3 outline-none hover:bg-gray-200 focus-visible:border-blue-500 active:border-transparent active:bg-blue-100 active:text-blue-700'

  const location = useLocation()
  const [idForBtn, , isMatchBtnWithFirstSegment] = prepUtils(to, location)

  let [isIconShow, setIsIconShow] = useState(!isMatchBtnWithFirstSegment)

  const toggleElementValue = useSidebarMenuStore(state => state.toggleElementValue)

  useEffect(() => {
    if (isMatchBtnWithFirstSegment) setIsIconShow(true)
    else setIsIconShow(false)
  }, [isMatchBtnWithFirstSegment])

  return idForBtn ? (
    <button
      // TODO; maybe should rework this piece of sh*t
      onClick={ev => {
        ev.currentTarget.classList.toggle('bg-blue-800')
        ev.currentTarget.classList.toggle('text-white')
        ev.currentTarget.classList.toggle('hover:bg-blue-700')

        setIsIconShow(val => !val)

        toggleElementValue(id)
      }}
      title={title}
      className={
        // TODO; maybe should rework this piece of sh*t
        className + (isMatchBtnWithFirstSegment ? ' bg-blue-800 text-white hover:bg-blue-700' : '')
      }
    >
      {children}
      <ChevronRightIcon
        className={
          'h-4 w-4 flex-shrink-0 transform transition-transform' +
          (isIconShow ? ' rotate-90 ' : ' rotate-0 ')
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
