const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};


exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const queryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  queryResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/service-page.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
};
