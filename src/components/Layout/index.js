import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'react-jss'
// import JssProvider from 'react-jss/lib/JssProvider'
import theme from '../../assets/theme'

import Header from './Header'
import 'normalize.css'
import './global.css'
import Footer from './Footer'

// let counter = 0
// const createGenerateClassName = () => {
//   return rule => {
//     // console.log(rule.options.sheet.options)
//     // console.log(rule)
//     console.log(counter)
//     // debugger
//     counter += 1
//     return `aces-${rule.key}-${counter}`
//   }
// }

const Layout = ({ children, disableGutters, pageName }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={
              pageName ? `${pageName} | ACES` : data.site.siteMetadata.title
            }
            meta={[
              { name: 'description', content: data.site.siteMetadata.title },
              { name: 'keywords', content: 'ACES, star citizen, organization' },
            ]}
          >
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css?family=Orbitron:400,700|Roboto:400,400i,700,700i"
              rel="stylesheet"
            />
          </Helmet>
          <Header disableGutters={disableGutters} />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
