import { Colors } from './collections'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface TwClass {
  'verasic-primary': string
  'verasic-secondary': string
  'verasic-tertiary': string
  'verasic-accent': string
}

export const themeMapper = (colors: Colors) => ({
  '--color-verasic-primary': colors.primary,
  '--color-verasic-secondary': colors.secondary,
  '--color-verasic-tertiary': colors.tertiary,
  '--color-verasic-accent': colors.accent,
})

export const applyTheme = (theme: ReturnType<typeof themeMapper>) => {
  const root = document.documentElement

  Object.keys(theme).forEach(key => {
    root.style.setProperty(key, theme[key])
  })
}
