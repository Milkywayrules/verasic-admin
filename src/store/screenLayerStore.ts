import create from 'zustand'

interface screenLayer {
  isShow: boolean
  toggleIsShow: () => void
  setIsShow: (val: boolean) => void
}

export const useScreenLayerStore = create<screenLayer>(set => ({
  isShow: false,
  toggleIsShow: () => set(state => ({ isShow: !state.isShow })),
  setIsShow: val => set(() => ({ isShow: val })),
}))
