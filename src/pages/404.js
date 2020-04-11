import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import HeadingMenu from '../components/PageHeading/HeadingMenu'
import ghost from '../styles/assets/images/icon-ghost.svg'

const NotFoundPage = () => (
  <Layout fullContainer>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <div className="site-content error__background">
      <div className="container">
        <div className="error-404">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <figure className="error-404__figure">
                <img src={ghost} alt="" />
              </figure>
              <header className="error__header">
                <h2 className="error__title">OOOOPS! Página não econtrada</h2>
                <h3 className="error__subtitle">
                  Parece que temos um problema!
                </h3>
              </header>
              <div className="error__description">
                A página que você está procurando foi movida ou não existe mais,
                se você quiser, pode retornar à nossa homepage. Se o problema
                persiste, por favor envie-nos um email em{' '}
                <Link to="/contact">contato</Link>
              </div>
              <footer className="error__cta">
                <Link to="/" className="btn btn-primary">
                  Retornar
                </Link>{' '}
                <Link to="/archive" className="btn btn-primary-inverse">
                  Continuar Navegando
                </Link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
