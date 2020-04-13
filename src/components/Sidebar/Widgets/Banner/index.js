import React from 'react'
//import AdSense from 'react-adsense'

const Banner = () => {
  return (
    <aside className="widget card widget--sidebar widget-banner">
      <div className="widget__title card__header">
        <h4>Anúncio</h4>
      </div>
      <div className="widget__content card__content">
        {/*<AdSense.Google
          client="ca-pub-3812196532836599"
          slot="7516479165"
          style={{ display: 'block' }}
          format="auto"
          responsive="true"
        />*/}
      </div>
    </aside>
  )
}

export default Banner
