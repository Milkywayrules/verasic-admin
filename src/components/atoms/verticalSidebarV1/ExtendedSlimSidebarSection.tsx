interface Props<T> {
  items: T[]
  children: (item: T) => JSX.Element
}

const ExtendedSlimSidebarSection = <T,>({ items, children }: Props<T>) => {
  return (
    <div className="flex h-full w-full flex-col gap-5 overflow-y-auto px-4 py-5">
      {items.map(item => children(item))}
    </div>
  )
}

export default ExtendedSlimSidebarSection
