require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Coderko`,
    description: `Enhance your web skills and become better as a developer.`,
    author: `@stanleygarbo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Coderko - Enhance your skills`,
        short_name: `Coderko`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `standalone`,
        icon:`src/images/final-logo.png`
      },
    },
    { 
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.coderko.tech`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.coderko.tech',
        sitemap:`https://www.coderko.tech/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
