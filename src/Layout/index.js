import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from '../assets/theme';
import PrimaryNav from './Header/PrimaryNav';
import PageContainer from './PageContainer';

const Layout = ({ children, pageContainerProps, pathname }) => {
  return (
    <MuiThemeProvider theme={getTheme()}>
      <CssBaseline />
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
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Orbitron:300,400,700"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
              />
            </Helmet>
            <PrimaryNav currentPath={pathname} />
            {/* <Header disableGutters={disableGutters} /> */}
            <PageContainer {...pageContainerProps}>{children}</PageContainer>
            {/* <Footer /> */}
          </>
        )}
      />
    </MuiThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContainerProps: PropTypes.object,
  pathname: PropTypes.string.isRequired,
};

export default Layout;
