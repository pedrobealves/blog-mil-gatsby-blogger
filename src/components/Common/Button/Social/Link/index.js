import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Facebook = ({ url, icon, type, socialUrl }) => {
  return (
    <OverlayTrigger
      key="bottom"
      placement="bottom"
      overlay={<Tooltip id={`tooltip-bottom`}>{type}</Tooltip>}
    >
      <li className="social-links__item">
        <a
          href={socialUrl || url}
          className={`social-links__link${
            socialUrl ? ' social-links__link--' + type : ''
          }`}
          data-toggle="tooltip"
          data-placement="bottom"
          title=""
          data-original-title={type}
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    </OverlayTrigger>
  )
}

export default Facebook
