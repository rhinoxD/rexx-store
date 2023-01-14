import { FC, ReactNode, ButtonHTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  isLoading?: boolean
}

const Button: FC<Props> = ({
  children,
  className,
  isLoading = false,
  ...rest
}) => {
  const rootClassName = cn(s.root, className, {
    [s.loading]: isLoading,
  })
  return (
    <button className={rootClassName} type='button' {...rest}>
      {children}
      {isLoading && <div>Loading...</div>}
    </button>
  )
}

export default Button
