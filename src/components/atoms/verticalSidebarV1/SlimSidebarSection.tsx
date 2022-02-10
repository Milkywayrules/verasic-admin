interface Props<T> {
  items: T[]
  children: (item: T) => JSX.Element
}

const SlimSidebarSection = <T,>({ items, children }: Props<T>) => {
  return <ul className="flex flex-col items-center gap-2">{items.map(item => children(item))}</ul>
}

export default SlimSidebarSection
