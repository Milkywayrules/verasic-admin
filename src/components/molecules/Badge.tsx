import { DetailedHTMLProps, FC, HTMLAttributes, ReactChild, SVGProps } from 'react'

export type BadgeSize = 'default' | 'lg'
export type BadgeShape = 'default' | 'rounded'
export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'primary-inverted'
  | 'positive'
  | 'negative'
  | 'warning'
export type BadgeWeight = 'default' | 'thin'
type PickedBadgeAttrs = Pick<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'id' | 'role' | 'title'
>

interface BadgeProps extends PickedBadgeAttrs {
  iconOnly?: (props: React.ComponentProps<'svg'>) => JSX.Element
  size?: BadgeSize
  shape?: BadgeShape
  variant?: BadgeVariant
  weight?: BadgeWeight
  iconBefore?: ReactChild | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
  iconAfter?: ReactChild | ((props: SVGProps<SVGSVGElement>) => JSX.Element)
}

/**
 * Get size className relatives to "size" and "shape"
 */
const getSizeClassName = (size: BadgeSize, shape: BadgeShape): [string, string] => {
  const classNameArr: string[] = []
  let className = ''
  let classNameForIcon = ''

  // decide the badge size by adjust the text size
  if (size === 'default') {
    className = 'text-xs'
    classNameForIcon = 'w-3 h-3'
  } else if (size === 'lg') {
    className = 'text-sm'
    classNameForIcon = 'w-4 h-4'
  }

  classNameArr.push(className)

  // decide the badge padding and if it's "rounded" then decide size (w & h)
  if (shape === 'default') {
    className = 'px-2 py-0.5'
  } else if (shape === 'rounded') {
    if (size === 'default') className = 'w-5 h-5 min-w-min px-1'
    else if (size === 'lg') className = 'w-6 h-6 min-w-min px-1'
  }

  classNameArr.push(className)

  return [classNameArr.join(' '), classNameForIcon]
}

/**
 * Get shape className relatives to "shape"
 */
const getShapeClassName = (shape: BadgeShape): string => {
  let className = ''

  if (shape === 'default') className = 'rounded-[3px]'
  else if (shape === 'rounded') className = 'rounded-full'

  return className
}

/**
 * Get variant className relatives to "variant"
 */
const getVariantClassName = (variant: BadgeVariant): string => {
  let className = ''
  switch (variant) {
    case 'default':
      className = 'bg-gray-100 text-gray-700'
      break
    case 'primary':
      className = 'bg-blue-700 text-white'
      break
    case 'primary-inverted':
      className = 'bg-white text-blue-700'
      break
    case 'positive':
      className = 'bg-green-100 text-green-700'
      break
    case 'negative':
      className = 'bg-red-100 text-red-700'
      break
    case 'warning':
      className = 'bg-amber-100 text-amber-700'
      break
    default:
      className = ''
      break
  }

  return className
}

/**
 * Get weight className relatives to "weight"
 */
const getWeightClassName = (weight: BadgeWeight): string => {
  let className = ''

  if (weight === 'default') className = 'font-semibold'
  else if (weight === 'thin') className = 'font-normal'

  return className
}

/**
 * Build className
 */
const buildBadgeClassName = (
  size: BadgeSize,
  shape: BadgeShape,
  variant: BadgeVariant,
  weight: BadgeWeight,
): [string, string] => {
  const [className, classNameForIcon] = getSizeClassName(size, shape)

  return [
    [
      className,
      getShapeClassName(shape),
      getVariantClassName(variant),
      getWeightClassName(weight),
    ].join(' '),
    classNameForIcon,
  ]
}

/**
 * Badge component
 */
const Badge: FC<BadgeProps> = ({
  children,
  iconOnly,
  iconBefore,
  iconAfter,
  size = 'default',
  shape = 'default',
  variant = 'default',
  weight = 'default',
  ...props
}) => {
  const [className, iconClassName] = buildBadgeClassName(size, shape, variant, weight)

  if (iconOnly) {
    return (
      <div className={`flex cursor-default items-center justify-center ${className}`} {...props}>
        {iconOnly({ className: iconClassName })}
      </div>
    )
  }

  return (
    <div
      className={
        'flex cursor-default items-center justify-center gap-1.5 whitespace-nowrap' +
        ' ' +
        className
      }
      {...props}
    >
      {typeof iconBefore === 'function' ? iconBefore({ className: iconClassName }) : iconBefore}
      {children}
      {typeof iconAfter === 'function' ? iconAfter({ className: iconClassName }) : iconAfter}
    </div>
  )
}

export default Badge
