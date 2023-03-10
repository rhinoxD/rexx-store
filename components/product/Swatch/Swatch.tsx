import React, { FC } from 'react'
import cn from 'classnames'

import s from './Swatch.module.css'
import { Check } from '@components/icons'
import { isDark } from '@lib/color'

interface Props {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  label?: string
  variant?: 'size' | 'color' | string
  active?: boolean
  onClick: () => void
}

const Swatch: FC<Props> = ({
  color,
  label,
  variant,
  active,
  size = 'md',
  ...rest
}) => {
  label = label?.toLowerCase()
  variant = variant?.toLowerCase()

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === 'size',
    [s.dark]: color && isDark(color),
    [s.sm]: size === 'sm',
  })

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === 'color' && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === 'size' ? label : null}
    </button>
  )
}

export default Swatch
