import React from 'react'

const Newsletter = () => {
  return (
    <aside className="widget widget--sidebar card widget-newsletter">
      <div className="widget__title card__header">
        <h4>Our Newsletter</h4>
      </div>
      <div className="widget__content card__content">
        <h5 className="widget-newsletter__subtitle">Subscribe Now!</h5>
        <div className="widget-newsletter__desc">
          <p>Receba os últimos artigos artigos postados.</p>
        </div>
        <form action="#" id="newsletter" className="inline-form">
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your email address..."
            />
            <span className="input-group-append">
              <button className="btn btn-lg btn-default" type="button">
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    </aside>
  )
}

export default Newsletter
