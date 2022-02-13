import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  forwardRef,
  ReactChild,
  SVGProps,
} from 'react'

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'subtle'
  | 'link'
  | 'subtle-link'
  | 'warning'
  | 'danger'
export type ButtonSizing = 'fat' | 'wide' | 'default' | 'compact' | 'none'
type PickedButtonAttrs = Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'autoFocus' | 'className' | 'onBlur' | 'onClick' | 'onFocus' | 'type' | 'ref' | 'style'
>

export interface ButtonProps extends PickedButtonAttrs {
  variant?: ButtonVariant
  isDisabled?: boolean
  isSelected?: boolean

  href?: string
  iconBefore?: ReactChild | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  iconAfter?: ReactChild | ((props: SVGProps<SVGSVGElement>) => JSX.Element)

  sizing?: ButtonSizing
  testId?: string
  analyticsContext?: Record<string, any>
}

/**
 * General button sizing should come early (or first)
 */
const getSizingClassName = (sizing: ButtonSizing): string => {
  let className = ''

  if (sizing === 'fat') className = 'h-11 px-6'
  else if (sizing === 'wide') className = 'h-9 px-6'
  else if (sizing === 'default') className = 'h-9 px-3'
  else if (sizing === 'compact') className = 'h-6 px-3'
  else if (sizing === 'none') className = 'h-5 px-0'

  return className
}

/**
 * Specific state button styling should appended after sizing
 * and should not apply any general variant
 */
const getStateConditionClassName = (isDisabled: boolean, isSelected: boolean): string => {
  let className = ''

  if (isDisabled) {
    className = 'cursor-not-allowed bg-gray-100/75 text-gray-400'
    return className
  }

  if (isSelected) {
    className = 'bg-slate-700 text-slate-100 focus-visible:ring-blue-500'
    return className
  }

  return className
}

/**
 * General button styling should appended last
 */
const getVariantClassName = (variant: ButtonVariant): [string, string] => {
  let className = ''
  let spinnerClassName = ''

  switch (variant) {
    case 'default':
      spinnerClassName = 'text-gray-700'
      className =
        'bg-gray-100/75 text-gray-700 hover:bg-gray-200 active:bg-blue-100 focus-visible:ring-blue-500 active:text-blue-700'
      break

    case 'primary':
      spinnerClassName = 'text-white'
      className =
        'bg-blue-700 text-white hover:bg-blue-600 active:bg-blue-800 focus-visible:ring-blue-400'
      break

    case 'subtle':
      spinnerClassName = 'text-gray-700'
      className =
        'text-gray-700 hover:bg-gray-200 active:bg-blue-100 focus-visible:ring-blue-500 active:text-blue-700'
      break

    case 'link':
      spinnerClassName = 'text-blue-700'
      className =
        'text-blue-700 hover:text-blue-600 active:text-blue-900 focus-visible:ring-blue-500 hover:underline focus-visible:underline'
      break

    case 'subtle-link':
      spinnerClassName = 'text-gray-500'
      className =
        'text-gray-500 hover:text-gray-400 active:text-gray-700 focus-visible:ring-blue-500 hover:underline focus-visible:underline'
      break

    case 'warning':
      spinnerClassName = 'text-white'
      className =
        'bg-[#FFAB00] text-gray-800 hover:bg-amber-400 active:bg-orange-400 focus-visible:ring-orange-500'
      break

    case 'danger':
      spinnerClassName = 'text-white'
      className =
        'bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus-visible:ring-red-400'
      break
  }

  return [className, spinnerClassName]
}

export const buildButtonClassName = (
  sizing: ButtonSizing,
  isDisabled: boolean,
  isSelected: boolean,
  variant: ButtonVariant,
): [string, string] => {
  let spinnerClassName = ''
  const isState = isDisabled || isSelected

  const [className, y] = getVariantClassName(variant)
  spinnerClassName += y

  return [
    [
      getSizingClassName(sizing),
      getStateConditionClassName(isDisabled, isSelected),
      !isState && className,
    ].join(' '),
    spinnerClassName,
  ]
}

const Button: FC<ButtonProps> = forwardRef(
  (
    {
      children,
      className = '',
      variant = 'default',
      isDisabled = false,
      isSelected = false,
      type = 'button',
      sizing = 'default',
      testId,
      analyticsContext,
      style,
      iconBefore,
      iconAfter,
      ...props
    },
    ref,
  ) => {
    const [buttonClassName] = buildButtonClassName(sizing, isDisabled, isSelected, variant)

    return (
      <button
        ref={ref}
        type={type}
        className={
          'flex rounded-[3px] font-medium outline-none focus-visible:ring-2' +
          ' ' +
          buttonClassName +
          ' ' +
          className
        }
        style={style}
        disabled={isDisabled}
        {...props}
      >
        <span className="mx-auto flex h-full w-full items-center justify-center gap-2">
          {typeof iconBefore === 'function' ? iconBefore({ className: 'h-6 w-6' }) : iconBefore}
          {children}
          {typeof iconAfter === 'function' ? iconAfter({ className: 'h-6 w-6' }) : iconAfter}
        </span>
      </button>
    )
  },
)

export default Button
