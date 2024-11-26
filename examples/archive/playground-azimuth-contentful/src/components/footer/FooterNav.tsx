import type { FC } from 'react'
import React from 'react'

import { Action } from '../Action'
import type { Footer_nav } from 'contentlayer/generated'

export const FooterNav: FC<{ section: Footer_nav }> = ({ section }) => (
  <section className="cell widget widget-nav">
    {section.title && <h2 className="widget-title">{section.title}</h2>}
    {section.nav_links && (
      <ul className="menu">
        {section.nav_links.map((action, action_idx) => (
          <li key={action_idx} className="menu-item">
            <Action action={action} />
          </li>
        ))}
      </ul>
    )}
  </section>
)
