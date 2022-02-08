import { ColorSwatchIcon } from '@heroicons/react/outline'
import { FC, useRef } from 'react'
import { useScreenLayerStore } from 'src/store/screenLayerStore'
import { applyTheme, themeMapper } from 'src/themes/base'
import { Colors, themeCollections } from 'src/themes/collections'
import FullScreenLayer from '../atoms/FullScreenLayer'

interface Props {
  theme: Colors
}
const ThemeChangerBtn: FC<Props> = ({ children, theme }) => {
  return (
    <button
      onClick={() => applyTheme(themeMapper(theme))}
      style={{ backgroundColor: theme.primary }}
      className="rounded text-white"
    >
      {children}
    </button>
  )
}

const RightFloatingOption = () => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  const toggleIsShow = useScreenLayerStore(select => select.toggleIsShow)

  const toggleOptsBtn = () => {
    toggleIsShow()

    if (divRef.current && btnRef.current) {
      divRef.current.classList.toggle('hidden')

      btnRef.current.classList.toggle('right-60')
      btnRef.current.classList.toggle('right-0')
    }
  }

  return (
    <>
      <FullScreenLayer onClick={toggleOptsBtn} />

      <div className="absolute right-0 flex bg-gray-200">
        <div className="relative flex h-screen items-center bg-gray-300">
          <button
            ref={btnRef}
            onClick={toggleOptsBtn}
            className="absolute right-0 rounded-l bg-gray-300 p-2 hover:bg-gray-100"
          >
            <ColorSwatchIcon className="h-8 w-8" />
          </button>

          <div ref={divRef} className="hidden h-screen w-60">
            <div className="font flex flex-col gap-3 px-4 py-2">
              <h2 className="font-semibold">Select theme</h2>
              <div className="flex flex-col gap-1">
                <ThemeChangerBtn theme={themeCollections.theme0}>Theme 0</ThemeChangerBtn>
                <ThemeChangerBtn theme={themeCollections.theme1}>Theme 1</ThemeChangerBtn>
                <ThemeChangerBtn theme={themeCollections.theme2}>Theme 2</ThemeChangerBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightFloatingOption
