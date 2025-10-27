/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Colours of tango`,
    description: `Vocal, accordion and harp`,
    image: `src/assets/images/favicon.png`,
    siteUrl: `https://www.coloursoftango.com`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/favicon2.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/assets/images`,
        name: "images",
      },
    },
  ],
};
