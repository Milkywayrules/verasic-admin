import { SVGProps } from 'react'
import { capsEveryFirstLetter, capsFirstLetter } from './textUtils'

export type iconFn = (props: SVGProps<SVGSVGElement>) => JSX.Element

interface MenuContentProps {
  icon: iconFn | [icon: iconFn, props: SVGProps<SVGSVGElement>]
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
  const [iconFn, props] = processIconWithProps(icon)
  props.className = text ? 'h-5 w-5 flex-shrink-0' : 'h-6 w-6'

  return (
    <>
      {iconFn(props)}
      {text && <p className="w-full break-words text-left">{capsFirstLetter(text)}</p>}
    </>
  )
}
