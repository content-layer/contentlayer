import type { FC } from 'react'
import React from 'react'

import { htmlToReact, withPrefix } from '../../utils'
import type { Section_reviews } from 'contentlayer/generated'

export const SectionReviews: FC<{ section: Section_reviews }> = ({ section }) => (
  <section id={section.section_id} className={'block reviews-block bg-' + section.background + ' outer'}>
    <div className="block-header inner-small">
      {section.title && <h2 className="block-title">{section.title}</h2>}
      {section.subtitle && <p className="block-subtitle">{htmlToReact(section.subtitle)}</p>}
    </div>
    {section.reviews && (
      <div className="inner">
        <div className="grid">
          {section.reviews.map((review, review_idx) => (
            <blockquote key={review_idx} className="cell review">
              <div className="card">
                <p className="review-text">{htmlToReact(review.content)}</p>
                <footer className="review-footer">
                  {review.avatar && (
                    <img className="review-avatar" src={withPrefix(review.avatar)} alt={review.avatar_alt} />
                  )}
                  <cite className="review-author">{review.author}</cite>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    )}
  </section>
)
