import create from 'zustand'

interface Props {
  isShow: boolean
  toggleIsShow: () => void
  setIsShow: (val: boolean) => void
}

export const useScreenLayerStore = create<Props>(set => ({
  isShow: false,
  toggleIsShow: () => set(state => ({ isShow: !state.isShow })),
  setIsShow: val => set(() => ({ isShow: val })),
}))
