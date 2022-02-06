import {
  ChipIcon,
  KeyIcon,
  MenuIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { Outlet } from 'react-router-dom'
import SlimSidebar from './SlimSidebar'
import SlimSidebarList from './SlimSidebarList'

const iconProps = { className: 'h-6 w-6' }

const topItem = [
  <div className="mb-2">
    <SlimSidebarList
      to="/"
      title="Dashboard home"
      icon={<img src="/logo192.png" alt="logo" className="h-8 w-8" />}
    />
  </div>,
  <SlimSidebarList to="search" title="Search" icon={<SearchIcon {...iconProps} />} />,
  <SlimSidebarList to="create" title="Create" icon={<PlusIcon {...iconProps} />} />,
  <SlimSidebarList to="item/123" title="Key" icon={<KeyIcon {...iconProps} />} />,
]

const bottomItem = [
  <SlimSidebarList to="help" title="Help" icon={<QuestionMarkCircleIcon {...iconProps} />} />,
  <SlimSidebarList to="applications" title="Applications" icon={<ViewGridIcon {...iconProps} />} />,
  <SlimSidebarList to="core" title="Core Engine" icon={<ChipIcon {...iconProps} />} />,
  <SlimSidebarList to="menu" title="Menu" icon={<MenuIcon {...iconProps} />} />,
]

const DashboardBitbucketLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-white text-white">
      <SlimSidebar topItem={topItem} bottomItem={bottomItem} />

      <div className="flex w-60 shrink-0 grow-0 flex-col items-start justify-between bg-slate-800 p-5">
        sidebar 2
      </div>

      <div className="w-full bg-slate-700 p-5">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardBitbucketLayout
