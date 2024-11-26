import type { FC } from 'react'
import React from 'react'

import { classNames, Link, withPrefix } from '../utils'
import { Icon } from './Icon'
import type * as types from 'contentlayer/generated'

export const Action: FC<{ action: types.Action }> = ({ action }) => (
  <Link
    href={withPrefix(action.url)}
    target={action.new_window ? '_blank' : undefined}
    rel={action.new_window ? 'noopener' : action.no_follow ? 'nofollow' : undefined}
    className={classNames({
      button: action.style === 'primary' || action.style === 'secondary',
      secondary: action.style === 'secondary',
      'has-icon': action.has_icon,
    })}
  >
    {action.icon && <Icon icon={action.icon} />}
    <span
      className={classNames({
        'order-first': action.icon_position === 'right',
      })}
    >
      {action.label}
    </span>
  </Link>
)
