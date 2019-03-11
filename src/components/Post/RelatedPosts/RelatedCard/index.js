import React from 'react'
import { NavButton } from '../../../Common/Button'
import RelatedContent from './RelatedContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const componentName = ({ prev, next }) => {
  return (
    <div className="col-6">
      <div className={`card post-related__${prev ? 'prev' : 'next'}`}>
        <div className="card__content">
          {prev && (
            <NavButton to={prev.slug}>
              <FontAwesomeIcon icon="chevron-left" />
            </NavButton>
          )}
          <RelatedContent content={prev || next} />
          {next && (
            <NavButton to={next.slug}>
              <FontAwesomeIcon icon="chevron-right" />
            </NavButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default componentName
