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

    // Create blog post list pages
    const news = res.data.allPrismicBlog.edges;
    const newsPerPage = 10;
    const numPages = Math.ceil(news.length / newsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/newsList` : `/newsList/${i + 1}`,
        component: path.resolve("./src/templates/newsList.js"),
        context: {
          limit: newsPerPage,
          skip: i * newsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });

    res.data.allPrismicBlog.edges.forEach((edge) => {
      createPage({
        component: newsTemplate,
        path: `/news/${edge.node.uid}`,
        context: {
          uid: edge.node.uid,
        }
      })
    })

}
