exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              image
            }
          }
        }
      }
    }
  `);
  const services = result.data.allMarkdownRemark.edges;
  services.forEach(function({ node }) {
    const { path, image } = node.frontmatter;
    createPage({
      path,
      component: require.resolve("./src/templates/service.js"),
      context: {
        id: node.id
      }
    });
  });
};
