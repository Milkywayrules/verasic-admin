import SlimSidebarItem from '../atoms/SlimSidebarItem'

interface SidebarItem {
  id: number
  icon: JSX.Element
  title: string
  to?: string
  customWrapper?: (children: JSX.Element) => JSX.Element
}

interface Props {
  items: {
    topItems?: SidebarItem[]
    bottomItems?: SidebarItem[]
  }
}

const SlimSidebar = ({ items }: Props) => {
  const renderFn: (value: SidebarItem, index: number, array: SidebarItem[]) => JSX.Element = ({
    id,
    to,
    title,
    icon,
    customWrapper,
  }) => {
    return customWrapper ? (
      customWrapper(<SlimSidebarItem key={id} to={to} title={title} icon={icon} />)
    ) : (
      <SlimSidebarItem key={id} to={to} title={title} icon={icon} />
    )
  }

  return (
    <div className="flex w-16 shrink-0 grow-0 flex-col items-center justify-between bg-blue-800 py-4">
      {items.topItems ? (
        <ul className="flex flex-col items-center gap-2 p-2">{items.topItems.map(renderFn)}</ul>
      ) : (
        <span></span>
      )}

      {items.bottomItems ? (
        <ul className="flex flex-col items-center gap-2 p-2">{items.bottomItems.map(renderFn)}</ul>
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default SlimSidebar
