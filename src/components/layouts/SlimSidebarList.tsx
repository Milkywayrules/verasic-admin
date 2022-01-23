import { Link, To } from 'react-router-dom'

interface Props {
  icon: JSX.Element
  title?: string
  to?: To
}

const SlimSidebarList = ({ icon, title, to = '#' }: Props) => (
  <li>
    <Link
      to={to}
      title={title}
      className="flex justify-center p-1 rounded-full hover:bg-blue-500/50 active:bg-blue-500/25"
    >
      {icon}
    </Link>
  </li>
)

export default SlimSidebarList
