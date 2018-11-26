import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

const NotFoundPage = () => (
  <Layout pageName="Not Found">
    <Section disableVertPadding center>
      <h1>NOT FOUND</h1>
      <hr />
      <h5>You just hit a route that doesn't exist... the sadness.</h5>
    </Section>
  </Layout>
)

export default NotFoundPage
