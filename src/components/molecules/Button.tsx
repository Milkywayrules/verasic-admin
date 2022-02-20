import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  forwardRef,
  HTMLAttributeAnchorTarget,
  ReactChild,
  SVGProps,
} from 'react'
import { NavLink } from 'react-router-dom'
import { SpinnerVariant } from '../atoms/Spinner'

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
  target?: HTMLAttributeAnchorTarget
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
  else if (sizing === 'wide') className = 'h-8 px-6'
  else if (sizing === 'default') className = 'h-8 px-3'
  else if (sizing === 'compact') className = 'h-6 px-3'
  else if (sizing === 'none') className = 'h-5 px-0'

  return className
}

/**
 * Specific state button styling should appended after sizing
 * and should not apply any general variant
 */
const getStateConditionClassName = (
  isDisabled: boolean,
  isSelected: boolean,
  variant: ButtonVariant,
): [string, SpinnerVariant] => {
  let className = ''
  let spinnerVariant: SpinnerVariant = 'default'

  if (isDisabled) {
    if (variant === 'primary') {
      spinnerVariant = 'light'
      className = 'cursor-not-allowed bg-blue-800 text-white'
    } else {
      spinnerVariant = 'default'
      className = 'cursor-not-allowed bg-gray-100/75 text-gray-400'
    }

    return [className, spinnerVariant]
  }

  if (isSelected) {
    spinnerVariant = 'light'
    className = 'bg-slate-700 text-slate-100 focus-visible:ring-blue-500'
    return [className, spinnerVariant]
  }

  return [className, spinnerVariant]
}

/**
 * General button styling should appended last
 */
const getVariantClassName = (variant: ButtonVariant): [string, SpinnerVariant] => {
  let className = ''
  let spinnerVariant: SpinnerVariant = 'default'

  switch (variant) {
    case 'default':
      spinnerVariant = 'default'
      className =
        'bg-gray-100/75 text-gray-700 hover:bg-gray-200 active:bg-blue-100 focus-visible:ring-blue-500 active:text-blue-700'
      break

    case 'primary':
      spinnerVariant = 'light'
      className =
        'bg-blue-700 text-white hover:bg-blue-600 active:bg-blue-800 focus-visible:ring-blue-400'
      break

    case 'subtle':
      spinnerVariant = 'default'
      className =
        'text-gray-700 hover:bg-gray-200 active:bg-blue-100 focus-visible:ring-blue-500 active:text-blue-700'
      break

    case 'link':
      spinnerVariant = 'primary'
      className =
        'text-blue-700 hover:text-blue-600 active:text-blue-900 focus-visible:ring-blue-500 hover:underline focus-visible:underline'
      break

    case 'subtle-link':
      spinnerVariant = 'semidark'
      className =
        'text-gray-500 hover:text-gray-400 active:text-gray-700 focus-visible:ring-blue-500 hover:underline focus-visible:underline'
      break

    case 'warning':
      spinnerVariant = 'default'
      className =
        'bg-[#FFAB00] text-gray-800 hover:bg-amber-400 active:bg-orange-400 focus-visible:ring-orange-500'
      break

    case 'danger':
      spinnerVariant = 'light'
      className =
        'bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus-visible:ring-red-400'
      break
  }

  return [className, spinnerVariant]
}

export const buildButtonClassName = (
  sizing: ButtonSizing,
  isDisabled: boolean,
  isSelected: boolean,
  variant: ButtonVariant,
): [string, SpinnerVariant] => {
  const isState = isDisabled || isSelected

  const buttonSizingClass = getSizingClassName(sizing)
  const [buttonVariantClass, spinnerVariantClass] = getVariantClassName(variant)
  const [buttonStateClass, spinnerStateClass] = getStateConditionClassName(
    isDisabled,
    isSelected,
    variant,
  )

  return [
    [buttonSizingClass, buttonStateClass, !isState ? buttonVariantClass : ''].join(' '),
    isState ? spinnerStateClass : spinnerVariantClass,
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
      href,
      target = '_self',
      ...props
    },
    ref,
  ) => {
    const [buttonClassName] = buildButtonClassName(sizing, isDisabled, isSelected, variant)

    // instead of immediately return this button component
    // we separate this for deciding the "testId" and should be wrapped by "NavLink" or not
    const ButtonComp = (
      <button
        className={`flex rounded-[3px] font-medium outline-none focus-visible:ring-2 ${buttonClassName} ${className}`}
        data-testid={href ? `button:${testId}` : testId}
        ref={ref}
        type={type}
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

    return href ? (
      <NavLink to={href} target={target} data-testid={testId} tabIndex={-1}>
        {ButtonComp}
      </NavLink>
    ) : (
      ButtonComp
    )
  },
)

export default Button
