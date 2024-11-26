import type { FC } from 'react'
import React from 'react'

import { Link, markdownify, withPrefix } from '../../utils'
import type { Footer_text } from 'contentlayer/generated'

export const FooterText: FC<{ section: Footer_text }> = ({ section }) => (
  <section className="cell widget widget-text">
    {section.image &&
      (section.image_url ? (
        <Link className="widget-image" href={withPrefix(section.image_url)}>
          <img src={withPrefix(section.image)} alt={section.image_alt} />
        </Link>
      ) : (
        <p className="widget-image">
          <img src={withPrefix(section.image)} alt={section.image_alt} />
        </p>
      ))}
    {section.title && <h2 className="widget-title">{section.title}</h2>}
    {markdownify(section.content)}
  </section>
)
