interface Props {
  topItem: JSX.Element[]
  bottomItem: JSX.Element[]
}

const SlimSidebar = ({ topItem, bottomItem }: Props) => {
  return (
    <div className="flex w-16 shrink-0 grow-0 flex-col items-center justify-between bg-blue-800 py-4">
      <ul className="flex flex-col items-center gap-2 p-2">{topItem}</ul>

      <ul className="flex flex-col items-center gap-2 p-2">{bottomItem}</ul>
    </div>
  )
}

export default SlimSidebar
