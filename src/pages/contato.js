import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import ContactForm from '../components/Contact/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <Layout fullContainer>
      <Helmet>
        <title>{`Contato - ${config.siteTitle}`}</title>
      </Helmet>
      {
        // <SEO postNode={postNode} pagePath="contact" customTitle />
      }
      <ContactForm />
    </Layout>
  )
}

export default Contact
