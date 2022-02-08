export interface Colors {
  primary: string
  secondary: string
  tertiary: string
  accent: string
}

export const themeCollections = {
  theme0: {
    primary: '#1e40af',
    secondary: '#f97316',
    tertiary: '#334155',
    accent: '#e11d48',
  },

  theme1: {
    primary: '#e11d48',
    secondary: '#334155',
    tertiary: '#1e40af',
    accent: '#f97316',
  },

  theme2: {
    primary: '#f97316',
    secondary: '#e11d48',
    tertiary: '#1e40af',
    accent: '#334155',
  },
} as const
