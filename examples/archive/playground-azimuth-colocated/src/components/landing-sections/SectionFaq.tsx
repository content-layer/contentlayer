import { defineEmbedded } from 'contentlayer/source-files/schema'
import type { FC } from 'react'
import React from 'react'

import { htmlToReact, markdownify } from '../../utils'
import { sectionBaseFields } from './model'
import type * as types from 'contentlayer/generated'

export const SectionFaq: FC<{ section: types.SectionFaq }> = ({ section }) => (
  <section id={section.section_id} className={'block faq-block bg-' + section.background + ' outer'}>
    <div className="inner-small">
      <div className="block-header">
        {section.title && <h2 className="block-title">{section.title}</h2>}
        {section.subtitle && <p className="block-subtitle">{htmlToReact(section.subtitle)}</p>}
      </div>
      {section.faq_items && (
        <div className="faq-accordion handorgel">
          {section.faq_items.map((faqitem, faqitem_idx) => (
            <React.Fragment key={faqitem_idx + '.2'}>
              <h3 key={faqitem_idx} className="faq-accordion-header handorgel__header">
                <button className="handorgel__trigger">
                  <span>{faqitem.question}</span>
                  <span className="handorgel__icon icon-plus" />
                </button>
              </h3>
              <div key={faqitem_idx + '.1'} className="faq-accordion-content handorgel__content">
                <div className="handorgel__content-inner">{markdownify(faqitem.answer)}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  </section>
)

export const SectionFaqModel = defineEmbedded(() => ({
  name: 'SectionFaq',
  label: 'FAQ Section',
  labelField: 'title',
  fields: {
    ...sectionBaseFields,
    subtitle: {
      type: 'string',
      label: 'Subtitle',
      description: 'The subtitle of the section',
    },
    background: {
      type: 'enum',
      label: 'Background',
      description: 'The background of the section',
      options: ['gray', 'white'],
      default: 'gray',
    },
    faq_items: {
      type: 'list',
      label: 'FAQ Items',
      of: { type: 'object', object: FaqItem },
    },
  },
}))

const FaqItem = defineEmbedded(() => ({
  name: 'FaqItem',
  label: 'FAQ Item',
  fields: {
    question: {
      type: 'text',
      label: 'Question',
    },
    answer: {
      type: 'markdown',
      label: 'Answer',
    },
  },
}))
