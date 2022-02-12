import { SVGProps } from 'react'
import { useLocation } from 'react-router-dom'
import { capsFirstLetter } from './textUtils'

export type iconFn = (props: SVGProps<SVGSVGElement>) => JSX.Element

interface MenuContentProps {
  icon?: iconFn | [icon: iconFn, props: SVGProps<SVGSVGElement>]
  text?: string
}

/**
 * Process icon function and the props
 *
 * @param icon icon function or tuple of icon function and the icon props
 * @returns tuple of icon and the props
 */
export const processIconWithProps = (
  icon: iconFn | [icon: iconFn, props: SVGProps<SVGSVGElement>],
): [iconFn, SVGProps<SVGSVGElement>] => {
  // make className always available
  let props: SVGProps<SVGSVGElement> = { className: '' }

  if (Array.isArray(icon)) {
    // concat only the className and store it temporarily
    const temp = `${props.className!} ${icon[1] ? icon[1].className : ''}`
    // merge the default and incoming props
    props = { ...props, ...icon[1] }
    // grab the concatted className and assign to props.className
    props.className = temp

    icon = icon[0]
  }

  return [icon, props]
}

/**
 * Element for content of the menu.
 *
 * The icon and the menu text.
 *
 * The icon props will override the predefined props inside the component.
 */
export const MenuContent = ({ icon, text }: MenuContentProps): JSX.Element => {
  if (icon) {
    const [iconFn, props] = processIconWithProps(icon)
    props.className = text ? 'h-5 w-5 flex-shrink-0' : 'h-6 w-6'

    return (
      <>
        {iconFn(props)}
        {text && <p className="w-full break-words text-left">{capsFirstLetter(text)}</p>}
      </>
    )
  }

  if (text) {
    return <p className="w-full break-words text-left">{capsFirstLetter(text)}</p>
  }

  return <></>
}

/**
 *
 */
export const usePrepUtils = (to: string): [string | false, string, boolean] => {
  const location = useLocation()

  // a menu with button should have a children and should not redirect to any link/url
  const isStartWithHashtag = to.startsWith('#', 1)

  // these two are for checking the current url is match with the current btn
  const idForBtn = isStartWithHashtag && to.split('#', 2)[1]
  const URLFirstSegment = location.pathname.split('/', 2)[1]

  return [idForBtn, URLFirstSegment, idForBtn === URLFirstSegment]
}
