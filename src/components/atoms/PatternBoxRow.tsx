import { FC } from 'react'

interface Props {
  className?: string
}
const PatternBoxRow: FC<Props> = ({ children, className = '' }) => (
  <div className={'flex flex-wrap gap-3' + ' ' + className}>{children}</div>
)

export default PatternBoxRow
