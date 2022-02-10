import create from 'zustand'

type ObjOfElement = { [key: string | number]: boolean }

interface Props {
  objOfElement: ObjOfElement
  toggleElementValue: (key: string | number) => void
  setElementValue: (key: string | number, val: boolean) => void
  addElementToObj: (key: string | number, value: boolean) => void
}

export const useSidebarMenuStore = create<Props>(set => ({
  objOfElement: {},
  toggleElementValue: key =>
    set(state => ({
      objOfElement: { ...state.objOfElement, ...{ [key]: !state.objOfElement[key] } },
    })),
  setElementValue: (key, val) =>
    set(state => ({
      objOfElement: { ...state.objOfElement, ...{ [key]: val } },
    })),
  addElementToObj: (key, value) =>
    set(state => ({ objOfElement: { ...state.objOfElement, ...{ [key]: value } } })),
}))
