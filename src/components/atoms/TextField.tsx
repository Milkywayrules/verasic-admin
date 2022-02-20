import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

// disable ability to style the comp
type PickedInputField = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'style'
>
type TextFieldType = 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'
type TextFieldSizing = 'fat' | 'default' | 'compact'
type TextFieldWidth = '75' | '150' | '250' | '350' | '500'

interface Props extends PickedInputField {
  type?: TextFieldType
  width?: TextFieldWidth
  sizing?: TextFieldSizing
  testId?: string
}

const getWidthClassName = (width: TextFieldWidth) => {
  let className = ''

  if (width === '75') className = 'w-[75px]'
  else if (width === '150') className = 'w-[150px]'
  else if (width === '250') className = 'w-[250px]'
  else if (width === '350') className = 'w-[350px]'
  else if (width === '500') className = 'w-[500px]'

  return className
}

const getSizingClassName = (sizing: TextFieldSizing) => {
  let className = ''

  if (sizing === 'default') className = 'py-2 px-[6px]'
  else if (sizing === 'compact') className = 'py-0 px-1'
  else if (sizing === 'fat') className = 'py-4 px-3 text-base'

  return className
}

const TextField = ({
  type = 'text',
  width = '250',
  sizing = 'default',
  // placeholder,
  // title,
  testId,
  ...props
}: Props) => {
  const widthClassName = getWidthClassName(width)
  const sizingClassName = getSizingClassName(sizing)

  const className =
    'rounded-[3px] max-w-min border-2 border-[#DFE1E6] bg-[#FAFBFC] transition-colors focus-within:border-blue-500 focus-within:bg-white hover:bg-[#EBECF0] focus-within:hover:bg-white'

  return (
    <>
      <div className={className}>
        <input
          className={`max-w-full bg-transparent outline-none placeholder:text-gray-500/90 ${widthClassName} ${sizingClassName}`}
          data-testid={testId}
          type={type}
          // placeholder={placeholder}
          // title={title}
          {...props}
        />
      </div>
    </>
  )
}

export default TextField
