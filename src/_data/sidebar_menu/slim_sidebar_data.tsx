import {
  ChipIcon,
  KeyIcon,
  MenuIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { SidebarItem } from 'src/components/atoms/verticalSidebarV1/SlimSidebarItem'
import { MenuContent } from 'src/helpers/menuUtils'

const topItems: SidebarItem[] = [
  {
    id: 1,
    to: '/',
    title: 'Dashboard home',
    icon: (
      <div className="h-8 w-8">
        <img src="/logo192.png" alt="logo" className="" />
      </div>
    ),
    customWrapper: (children, key) => (
      <div key={key} className="mb-2">
        {children}
      </div>
    ),
  },
  { id: 2, title: 'Search', icon: <MenuContent icon={SearchIcon} /> },
  { id: 3, title: 'Create', icon: <MenuContent icon={PlusIcon} /> },
  { id: 4, title: 'Key', icon: <MenuContent icon={KeyIcon} /> },
]

const bottomItems: SidebarItem[] = [
  { id: 1, to: 'help', title: 'Help', icon: <MenuContent icon={QuestionMarkCircleIcon} /> },
  {
    id: 2,
    to: 'applications',
    title: 'Applications',
    icon: <MenuContent icon={ViewGridIcon} />,
  },
  { id: 3, to: 'core', title: 'Core Engine', icon: <MenuContent icon={ChipIcon} /> },
  { id: 4, to: '#', title: 'Menu', icon: <MenuContent icon={MenuIcon} /> },
]

// uncomment this to demo a very long list of menu
// topItems.push(
//   ...topItems.slice(1),
//   ...topItems.slice(1),
//   ...topItems.slice(1),
//   ...topItems.slice(1),
//   ...topItems.slice(1),
// )
// bottomItems.push(...bottomItems)

/**
 * Menu items for the slim sidebar.
 *
 * ? This should be available for every type of menu that support this kind of data to use, later.
 */
const SLIM_SIDEBAR_DATA = { topItems, bottomItems }

export default SLIM_SIDEBAR_DATA
