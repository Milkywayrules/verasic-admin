import {
  ChipIcon,
  ColorSwatchIcon,
  KeyIcon,
  MenuIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { Outlet } from 'react-router-dom'
import SlimSidebar from '../organisms/SlimSidebar'

const iconProps = { className: 'h-6 w-6' }

const topItems = [
  {
    id: 1,
    to: '/',
    title: 'Dashboard home',
    icon: <img src="/logo192.png" alt="logo" className="h-8 w-8" />,
    customWrapper: (children: JSX.Element) => <div className="mb-2">{children}</div>,
  },
  { id: 2, to: 'search', title: 'Search', icon: <SearchIcon {...iconProps} /> },
  { id: 3, to: 'create', title: 'Create', icon: <PlusIcon {...iconProps} /> },
  { id: 4, to: 'item/123', title: 'Key', icon: <KeyIcon {...iconProps} /> },
  { id: 5, title: 'Change theme', icon: <ColorSwatchIcon {...iconProps} /> },
]

const bottomItems = [
  { id: 1, to: 'help', title: 'Help', icon: <QuestionMarkCircleIcon {...iconProps} /> },
  { id: 2, to: 'applications', title: 'Applications', icon: <ViewGridIcon {...iconProps} /> },
  { id: 3, to: 'core', title: 'Core Engine', icon: <ChipIcon {...iconProps} /> },
  { id: 4, to: 'menu', title: 'Menu', icon: <MenuIcon {...iconProps} /> },
]

const DashboardBitbucketLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-800 text-white">
      <SlimSidebar items={{ topItems, bottomItems }} />

      <div className="flex w-60 shrink-0 grow-0 flex-col items-start justify-between bg-verasic-primary p-5">
        sidebar 2
      </div>

      <div className="w-full bg-slate-700 p-5">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardBitbucketLayout
