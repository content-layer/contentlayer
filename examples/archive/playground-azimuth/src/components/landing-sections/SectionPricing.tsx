import type { FC } from 'react'
import React from 'react'

import { classNames, htmlToReact, markdownify } from '../../utils'
import { CtaButtons } from './CtaButtons'
import type * as types from 'contentlayer/generated'

export const SectionPricing: FC<{ section: types.SectionPricing }> = ({ section }) => (
  <section id={section.section_id} className={'block pricing-block bg-' + section.background + ' outer'}>
    <div className="block-header inner-small">
      {section.title && <h2 className="block-title">{section.title}</h2>}
      {section.subtitle && <p className="block-subtitle">{htmlToReact(section.subtitle)}</p>}
    </div>
    {section.pricing_plans && (
      <div className="inner">
        <div className="grid">
          {section.pricing_plans.map((plan, plan_idx) => (
            <div key={plan_idx} className="cell plan">
              <div
                className={classNames('card', {
                  highlight: plan.highlight,
                })}
              >
                <div className="plan-header">
                  {plan.title && <h3 className="plan-title">{plan.title}</h3>}
                  {plan.subtitle && <div className="plan-subtitle">{plan.subtitle}</div>}
                  {plan.price && <div className="plan-price">{plan.price}</div>}
                </div>
                <div className="plan-content">{markdownify(plan.details)}</div>
                {plan.actions && (
                  <div className="plan-footer block-buttons">
                    <CtaButtons actions={plan.actions} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </section>
)
