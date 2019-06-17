const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const newsTemplate = path.resolve('./src/templates/news.js');
  const res = await graphql(`
    query {
      allPrismicBlog {
        edges {
          node {
            uid
          }
        }
      }
    }
    `)
    res.data.allPrismicBlog.edges.forEach((edge) => {
      createPage({
        component: newsTemplate,
        path: `/news/${edge.node.uid}`,
        context: {
          uid: edge.node.uid
        }
      })
    })
}
