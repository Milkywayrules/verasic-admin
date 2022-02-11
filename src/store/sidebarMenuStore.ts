import create from 'zustand'

type ActiveStateObject = { [key: string | number]: boolean }

interface Props {
  activeStateCollection: ActiveStateObject
  getActiveStateByID: (key: string | number) => boolean
  setActiveStateByID: (key: string | number, val: boolean) => void
}

export const useSidebarMenuStore = create<Props>((set, get) => ({
  activeStateCollection: {},
  getActiveStateByID: key => get().activeStateCollection[key],
  setActiveStateByID: (key, val) =>
    set(state => ({
      activeStateCollection: { ...state.activeStateCollection, ...{ [key]: val } },
    })),
}))
