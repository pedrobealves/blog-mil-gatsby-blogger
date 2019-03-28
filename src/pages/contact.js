import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import { FacebookProvider, MessageUs } from 'react-facebook'
import configFacebook from '../utils/facebookConfig'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Contact</PageTitle>

        <FacebookProvider appId={configFacebook.apiId}>
          <MessageUs
            messengerAppId={configFacebook.apiId}
            pageId="314219968779578"
          />
          <ContactForm />
        </FacebookProvider>
      </Container>
    </Layout>
  )
}

export default Contact
