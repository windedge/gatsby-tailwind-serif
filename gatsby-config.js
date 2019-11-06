module.exports = {
  siteMetadata: {
    title: `Horten Tannhelse AS`,
    description: `Din tannlege i Horten`,
    author: `@webmaeistro`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Horten Tannhelse AS`,
        short_name: `horten-tannhelse`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0b4e8d`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "services"
      }
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    "gatsby-plugin-offline"
  ]
};
