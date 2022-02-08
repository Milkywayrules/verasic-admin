import { useScreenLayerStore } from 'src/store/screenLayerStore'

interface LayerProps {
  onClick: () => void
  className: string
}

const FullScreenLayer = ({ onClick, className }: Partial<LayerProps>) => {
  const { isShow, toggleIsShow } = useScreenLayerStore()

  return (
    <>
      {isShow && (
        <div
          onClick={() => (onClick ? onClick() : toggleIsShow())}
          className={'absolute flex h-screen w-screen bg-black/25 ' + className ?? ''}
        ></div>
      )}
    </>
  )
}

export default FullScreenLayer
