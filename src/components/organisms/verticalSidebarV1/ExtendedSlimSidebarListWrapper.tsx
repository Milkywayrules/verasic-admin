interface Props<T> {
  items: T[]
  children: (item: T) => JSX.Element
}

const ExtendedSlimSidebarListWrapper = <T,>({ children, items }: Props<T>) => {
  return (
    <>
      <ul className="flex flex-col">{items.map(item => children(item))}</ul>
    </>
  )
}

export default ExtendedSlimSidebarListWrapper
