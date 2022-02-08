import { Link, To } from 'react-router-dom'

interface Props {
  icon: JSX.Element
  title: string
  to?: To
}

const SlimSidebarItem = ({ icon, title, to = '#' }: Props) => (
  <li>
    <Link
      to={to}
      title={title}
      className="flex justify-center rounded-full p-1 hover:bg-blue-500/50 active:bg-blue-500/25"
    >
      {icon}
    </Link>
  </li>
)

export default SlimSidebarItem
