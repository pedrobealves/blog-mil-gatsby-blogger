import React from 'react'
import { NavButton } from '../../../Common/Button'
import RelatedContent from './RelatedContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const componentName = props => {
  const { prev, next } = props
  return (
    <div className="col-6">
      <div className={`card post-related__${prev ? 'prev' : 'next'}`}>
        <div className="card__content">
          {prev && (
            <NavButton to={prev.slug}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </NavButton>
          )}
          <RelatedContent content={prev || next} />
          {next && (
            <NavButton to={next.slug}>
              <FontAwesomeIcon icon={faChevronRight} />
            </NavButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default componentName
