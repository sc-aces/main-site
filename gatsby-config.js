module.exports = {
  pathPrefix: `/project`,
  siteMetadata: {
    title: 'Association of Capitalists, Explorers, and Soldiers',
    theme: {
      palette: {
        primary: {
          color: '#2C3E50',
          contrast: '#fff',
        },
        secondary: {
          color: '#e7a53c',
          contrast: '#0a1322',
        },
        midnight: {
          color: '#0a1322',
          contrast: '#fff',
        },
        gray: {
          color: '#bcbcbc',
        },
      },
      fonts: {
        display: '"Orbitron", Times, sans-serif',
        body: '"Roboto", Times, sans-serif',
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'ACES',
        start_url: '/project',
        background_color: '#2C3E50',
        theme_color: '#2C3E50',
        display: 'minimal-ui',
        icon: 'src/assets/img/acesLogoB.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-jss`,
  ],
}
