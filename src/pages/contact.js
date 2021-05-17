import React from 'react'
import Layout from '../components/Layout/Layout'
import Container from '../components/Layout/Container'
import PageTitle from '../components/Posts/PageTitle'
import ContactForm from '../components/Archive/ContactForm'
import SEO from '../components/Layout/SEO'

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
