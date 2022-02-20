import { ForwardedRef, forwardRef } from 'react'
import spinnerSizeCustomOption from 'src/_data/spinner_size_custom_option'

// const obj = {}
// for (let i = 5; i <= 160; i = i + 5) {
//   obj[String(i).padStart(3, '0')] = i
// }
// console.log(obj)

export type SpinnerSize =
  | 'default'
  | 'xs'
  | 'sm'
  | 'lg'
  | 'xl'
  | '2xl'
  | keyof typeof spinnerSizeCustomOption

export type SpinnerVariant = 'default' | 'light' | 'semidark' | 'primary'

interface Props {
  className?: string
  size?: SpinnerSize
  variant?: SpinnerVariant
  testId?: string
}

const getSizeClassName = (size: SpinnerSize): string => {
  let className = ''

  if (size === 'default') className = 'h-5 w-5'
  else if (size === 'xs') className = 'h-3 w-3'
  else if (size === 'sm') className = 'h-4 w-4'
  else if (size === 'lg') className = 'h-6 w-6'
  else if (size === 'xl') className = 'h-10 w-10'
  else if (size === '2xl') className = 'h-20 w-20'
  else className = spinnerSizeCustomOption[size]

  return className
}

const getVariantClassName = (variant: SpinnerVariant): string => {
  let className = ''

  if (variant === 'default') className = 'text-gray-700'
  else if (variant === 'light') className = 'text-white'
  else if (variant === 'semidark') className = 'text-gray-500'
  else if (variant === 'primary') className = 'text-blue-700'

  return className
}

const Spinner = forwardRef(
  (
    { className = '', size = 'default', variant = 'default', testId }: Props,
    ref: ForwardedRef<SVGSVGElement>,
  ) => {
    const sizeClassName = getSizeClassName(size)
    const variantClassName = getVariantClassName(variant)

    return (
      <svg
        className={`flex animate-spin items-center justify-between py-0 ${className} ${sizeClassName} ${variantClassName}`}
        data-testid={testId}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-10"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-90"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )
  },
)

export default Spinner
