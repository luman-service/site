module.exports = {
  siteMetadata: {
    title: 'LUMAN service',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/category`,
        name: 'category',
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
  ],
};
