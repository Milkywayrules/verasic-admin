import {
  ArchiveIcon,
  CakeIcon,
  CashIcon,
  ChartBarIcon,
  CloudDownloadIcon,
  CodeIcon,
  CollectionIcon,
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
      id: 10,
      to: '/#components',
      content: <MenuContent icon={CollectionIcon} text="Components" />,
      childItems: [
        {
          id: 10199,
          to: '/components/text-field',
          content: <MenuContent text="Text Field" />,
        },
        {
          id: 101,
          to: '/components/alert',
          content: <MenuContent text="Alert" />,
        },
        {
          id: 102,
          to: '/components/accordion',
          content: <MenuContent text="Accordion" />,
        },
        {
          id: 103,
          to: '/components/badge',
          content: <MenuContent text="Badge" />,
        },
        {
          id: 104,
          to: '/components/breadcrumb',
          content: <MenuContent text="Breadcrumb" />,
        },
        {
          id: 105,
          to: '/components/button',
          content: <MenuContent text="Button" />,
        },
        {
          id: 106,
          to: '/components/card',
          content: <MenuContent text="Card" />,
        },
        {
          id: 107,
          to: '/components/carousel',
          content: <MenuContent text="Carousel" />,
        },
        {
          id: 108,
          to: '/components/dropdown',
          content: <MenuContent text="Dropdown" />,
        },
        {
          id: 109,
          to: '/components/form',
          content: <MenuContent text="Form" />,
        },
        {
          id: 110,
          to: '/components/typography',
          content: <MenuContent text="Typography" />,
        },
        {
          id: 111,
          to: '/components/modal',
          content: <MenuContent text="Modal" />,
        },
        {
          id: 112,
          to: '/components/tab',
          content: <MenuContent text="Tab" />,
        },
        {
          id: 113,
          to: '/components/navbar',
          content: <MenuContent text="Navbar" />,
        },
        {
          id: 114,
          to: '/components/footer',
          content: <MenuContent text="Footer" />,
        },
        {
          id: 115,
          to: '/components/sidebar',
          content: <MenuContent text="Sidebar" />,
        },
        {
          id: 116,
          to: '/components/pagination',
          content: <MenuContent text="Pagination" />,
        },
        {
          id: 117,
          to: '/components/timeline',
          content: <MenuContent text="Timeline" />,
        },
        {
          id: 118,
          to: '/components/progress-bar',
          content: <MenuContent text="Progress Bar" />,
        },
        {
          id: 119,
          to: '/components/table',
          content: <MenuContent text="Table" />,
        },
        {
          id: 120,
          to: '/components/spinner',
          content: <MenuContent text="Spinner" />,
        },
        {
          id: 121,
          to: '/components/toast',
          content: <MenuContent text="Toast" />,
        },
        {
          id: 122,
          to: '/components/tooltip',
          content: <MenuContent text="Tooltip" />,
        },
      ],
    },
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
          text="The Text Wrap Very Great And It Looks Amazing, Right? ????"
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
