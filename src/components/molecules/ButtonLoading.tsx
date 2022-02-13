import { FC, useEffect, useRef } from 'react'
import Spinner from '../atoms/Spinner'
import Button, { ButtonProps, buildButtonClassName } from './Button'

interface Props extends ButtonProps {
  isLoading?: boolean
  spinnerClassName?: string
}

const ButtonLoading: FC<Props> = ({
  children,
  isLoading = false,
  spinnerClassName = 'invisible',
  iconBefore,
  iconAfter,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const spinnerRef = useRef<SVGSVGElement>(null)

  const [, spinnerStyleClassName] = buildButtonClassName(
    props.spacing ?? 'default',
    props.isDisabled ?? false,
    props.isSelected ?? false,
    props.variant ?? 'default',
  )

  useEffect(() => {
    if (isLoading) {
      textRef.current?.classList.add('invisible')
      spinnerRef.current?.classList.remove('invisible')
    } else {
      spinnerRef.current?.classList.add('invisible')
      textRef.current?.classList.remove('invisible')
    }
  }, [isLoading])

  return (
    <Button ref={btnRef} {...props}>
      <div className="relative">
        <span ref={textRef} className="flex items-center gap-2">
          {typeof iconBefore === 'function' ? iconBefore({ className: 'h-6 w-6' }) : iconBefore}
          {children}
          {typeof iconAfter === 'function' ? iconAfter({ className: 'h-6 w-6' }) : iconAfter}
        </span>
        <div className="absolute top-0 h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            <Spinner ref={spinnerRef} className={spinnerClassName + ' ' + spinnerStyleClassName} />
          </div>
        </div>
      </div>
    </Button>
  )
}

export default ButtonLoading
