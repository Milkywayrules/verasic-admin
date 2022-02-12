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
type ButtonSpacing = 'default' | 'compact' | 'none'
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

  spacing?: ButtonSpacing
  testId?: string
  analyticsContext?: Record<string, any>
}

export const getButtonClassName = (
  spacing: ButtonSpacing,
  isDisabled: boolean,
  isSelected: boolean,
  variant: ButtonVariant,
): [string, string] => {
  let className = ''
  let spinnerClassName = ''

  /**
   * use a lone-block.
   * General button sizing
   */
  {
    if (spacing === 'compact') {
      className = 'leading-7'
    }
    if (spacing === 'none') {
      className = 'leading-0'
    }
  }

  /**
   * use a lone-block.
   * Specific state button styling come after sizing
   */
  {
    if (isDisabled) {
      className = 'cursor-not-allowed bg-gray-100/75 text-gray-400'
      return [className, '']
    }

    if (isSelected) {
      className = 'bg-slate-700 text-slate-100 focus-visible:ring-blue-500'
      return [className, '']
    }
  }

  /**
   * use a lone-block.
   * General button styling come last
   */
  {
    if (variant === 'default') {
      spinnerClassName = 'text-gray-700'
      className =
        'bg-gray-100/75 text-gray-700 hover:bg-gray-200 active:bg-blue-100 focus-visible:ring-blue-500 active:text-blue-700'
    }

    if (variant === 'primary') {
      spinnerClassName = 'text-white'
      className =
        'bg-blue-700 text-white hover:bg-blue-600 active:bg-blue-800 focus-visible:ring-blue-400'
    }

    if (variant === 'subtle') {
      spinnerClassName = 'text-gray-700'
      className =
        'text-gray-700 hover:bg-gray-200 active:bg-blue-100 focus-visible:ring-blue-500 active:text-blue-700'
    }

    if (variant === 'link') {
      spinnerClassName = 'text-blue-700'
      className =
        'text-blue-700 hover:text-blue-600 active:text-blue-900 focus-visible:ring-blue-500 hover:underline focus-visible:underline'
    }

    if (variant === 'subtle-link') {
      spinnerClassName = 'text-gray-500'
      className =
        'text-gray-500 hover:text-gray-400 active:text-gray-700 focus-visible:ring-blue-500 hover:underline focus-visible:underline'
    }

    if (variant === 'warning') {
      spinnerClassName = 'text-white'
      className =
        'bg-[#FFAB00] text-gray-800 hover:bg-amber-400 active:bg-orange-400 focus-visible:ring-orange-500'
    }

    if (variant === 'danger') {
      spinnerClassName = 'text-white'
      className =
        'bg-red-600 text-white hover:bg-red-500 active:bg-red-700 focus-visible:ring-red-400'
    }
  }

  return [className, spinnerClassName]
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
      spacing = 'default',
      testId,
      analyticsContext,
      style,
      iconBefore,
      iconAfter,
      ...props
    },
    ref,
  ) => {
    const [buttonClassName] = getButtonClassName(spacing, isDisabled, isSelected, variant)

    return (
      <button
        ref={ref}
        type={type}
        className={
          'flex h-9 items-center gap-2 rounded-[3px] px-3 text-center font-medium leading-9 outline-none focus-visible:ring-2' +
          ' ' +
          buttonClassName +
          ' ' +
          className
        }
        style={style}
        disabled={isDisabled}
        {...props}
      >
        {typeof iconBefore === 'function' ? iconBefore({ className: 'h-6 w-6' }) : iconBefore}
        {children}
        {typeof iconAfter === 'function' ? iconAfter({ className: 'h-6 w-6' }) : iconAfter}
      </button>
    )
  },
)

export default Button
