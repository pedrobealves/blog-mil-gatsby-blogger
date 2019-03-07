import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Social = () => {
  return (
    <ul className="social-links social-links--inline social-links--main-nav">
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={<Tooltip id={`tooltip-bottom`}>facebook</Tooltip>}
      >
        <li className="social-links__item">
          <a
            href="http://alchemists.dan-fisher.com/basketball/index.html#"
            className="social-links__link"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
      </OverlayTrigger>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={<Tooltip id={`tooltip-bottom`}>twitter</Tooltip>}
      >
        <li className="social-links__item">
          <a
            href="http://alchemists.dan-fisher.com/basketball/index.html#"
            className="social-links__link"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
      </OverlayTrigger>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={<Tooltip id={`tooltip-bottom`}>instagram</Tooltip>}
      >
        <li className="social-links__item">
          <a
            href="http://alchemists.dan-fisher.com/basketball/index.html#"
            className="social-links__link"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="Google+"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </OverlayTrigger>
    </ul>
  )
}

export default Social
