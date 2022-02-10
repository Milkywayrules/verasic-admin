import { FC } from 'react'
import { Location, NavLink } from 'react-router-dom'

export interface SidebarItem {
  id: number
  icon: JSX.Element
  title: string
  to?: string
  customWrapper?: (children: JSX.Element, key: string | number) => JSX.Element
}

export interface NavLinkOrButtonProps {
  id: string | number
  to: string
  className: string
  title?: string
  location?: Location
}

/**
 *
 */
const NavLinkOrButton: FC<NavLinkOrButtonProps> = ({ to, className, children, title = '' }) => {
  return to === '#' ? (
    <button title={title} className={className}>
      {children}
    </button>
  ) : (
    <NavLink to={to} title={title} className={className}>
      {children}
    </NavLink>
  )
}

/**
 *
 */
const SlimSidebarItem = ({ id, title, icon, customWrapper, to = '#' }: SidebarItem) => {
  const className =
    'flex justify-center rounded-full p-1 hover:bg-blue-500/50 active:bg-blue-500/25 focus-visible:outline outline-2 outline-offset-0 outline-blue-400'

  return customWrapper ? (
    customWrapper(
      <li>
        <NavLinkOrButton id={id} to={to} title={title} className={className}>
          {icon}
        </NavLinkOrButton>
      </li>,
      id,
    )
  ) : (
    <li>
      <NavLinkOrButton id={id} to={to} title={title} className={className}>
        {icon}
      </NavLinkOrButton>
    </li>
  )
}

export default SlimSidebarItem
