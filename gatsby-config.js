module.exports = {
  pathPrefix: `/aces-2`,
  siteMetadata: {
    title: 'Association of Capitalists, Explorers, and Soldiers',
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
