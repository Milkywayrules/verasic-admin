import { FC } from 'react'
import componentUtils from 'src/helpers/componentUtils'

interface Props {
  className?: string
}

/**
 *
 */
const PatternBox: FC<Props> = ({ children, className = '' }) => {
  return (
    <div
      className={
        `flex flex-col gap-5 rounded border-2 border-gray-400 bg-gray-100 px-8 py-12 ` + className
      }
      style={componentUtils.style.bgPatterns.endlessClouds.light}
    >
      {children}
    </div>
  )
}

export default PatternBox
