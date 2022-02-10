import {
  ArchiveIcon,
  CakeIcon,
  CashIcon,
  ChartBarIcon,
  CloudDownloadIcon,
  CodeIcon,
  EmojiHappyIcon,
  MailIcon,
  MailOpenIcon,
  MapIcon,
  MenuAlt4Icon,
  ShieldExclamationIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import { MenuContent } from 'src/helpers/menuUtils'

interface ListItem {
  id: string | number
  to: string
  content: JSX.Element
}

interface ListItemParent extends ListItem {
  childItems?: ListItem[]
}

interface ExtendedSlimSidebarItemWithHeading {
  id: string | number
  title: string
  listItem: ListItemParent[]
}

const MENU1: ExtendedSlimSidebarItemWithHeading = {
  id: 1,
  title: 'General',
  listItem: [
    {
      id: 11,
      to: '/#menu_11',
      content: <MenuContent icon={MailIcon} text="E-mail" />,
      childItems: [
        {
          id: 111,
          to: '/menu_11/submenu_1',
          content: <MenuContent icon={MailOpenIcon} text="Inbox" />,
        },
        {
          id: 112,
          to: '/menu_11/submenu_2',
          content: <MenuContent icon={ArchiveIcon} text="Archive" />,
        },
        {
          id: 113,
          to: '/menu_11/submenu_3',
          content: <MenuContent icon={TrashIcon} text="Junk" />,
        },
      ],
    },
    {
      id: 12,
      to: '/menu_12',
      content: <MenuContent icon={ChartBarIcon} text="Analytics With Chart" />,
    },
    {
      id: 13,
      to: '/menu_13',
      content: (
        <MenuContent
          icon={MenuAlt4Icon}
          text="This Is An Example For A Very Very Looooooong Text For The Menu"
        />
      ),
    },
    {
      id: 14,
      to: '/menu_14',
      content: (
        <MenuContent
          icon={EmojiHappyIcon}
          text="The Text Wrap Very Great And It Looks Amazing, Right? 😊"
        />
      ),
    },
    {
      id: 15,
      to: '/#menu_15',
      content: <MenuContent icon={CloudDownloadIcon} text="Cloud" />,
      childItems: [
        {
          id: 151,
          to: '/menu_15/submenu_1',
          content: <MenuContent icon={CloudDownloadIcon} text="Create New Instance" />,
        },
        {
          id: 152,
          to: '/menu_15/submenu_2',
          content: <MenuContent icon={CloudDownloadIcon} text="Update Instance" />,
        },
        {
          id: 153,
          to: '/menu_15/submenu_3',
          content: <MenuContent icon={CloudDownloadIcon} text="Revert All" />,
        },
      ],
    },
  ],
}

const MENU2: ExtendedSlimSidebarItemWithHeading = {
  id: 2,
  title: 'Applications',
  listItem: [
    {
      id: 21,
      to: '/#menu_21',
      content: <MenuContent icon={CodeIcon} text="Clean Code" />,
      childItems: [
        {
          id: 211,
          to: '/menu_21/submenu_1',
          content: (
            <MenuContent
              icon={ShieldExclamationIcon}
              text="example for capitalizing first letter"
            />
          ),
        },
      ],
    },
    {
      id: 22,
      to: '/menu_22',
      content: <MenuContent icon={CakeIcon} text="Order Your Cake Here!" />,
    },
    {
      id: 23,
      to: '/menu_23',
      content: <MenuContent icon={MapIcon} text="Find your way home here" />,
    },
    {
      id: 24,
      to: '/menu_24',
      content: <MenuContent icon={CashIcon} text="Take Money" />,
    },
  ],
}

/**
 * Menu items for the extended slim sidebar.
 *
 * ? This should be available for every type of menu that support this kind of data to use, later.
 */
const EXT_SLIM_SIDEBAR_DATA: ExtendedSlimSidebarItemWithHeading[] = []
EXT_SLIM_SIDEBAR_DATA.push(MENU1)
EXT_SLIM_SIDEBAR_DATA.push(MENU2)

// uncomment this to demo a very long list of menu
// EXT_SLIM_SIDEBAR_DATA.push(MENU1, MENU2, MENU1, MENU2, MENU1, MENU2)

export default EXT_SLIM_SIDEBAR_DATA
