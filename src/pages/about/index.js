import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import AboutPage from '../../pages-src/about/'

const IndexPage = () => (
  <Layout disableGutters pageName="About">
    <AboutPage />
  </Layout>
)

export default IndexPage
