import { useEffect } from 'react'

/**
 * Set title once before component mounted and reset on unmount.
 *
 * @param title title to be added
 * @param override use title as prefix or as a full title instead
 */
export const useTitle = (title: string, override: boolean = false): void => {
  const fallback = '-'

  useEffect(() => {
    document.title = override ? title : `${title} | ${process.env.REACT_APP_SITE_TITLE || fallback}`

    return () => {
      document.title = `${process.env.REACT_APP_SITE_TITLE || fallback}`
    }
  }, [title, override])
}
