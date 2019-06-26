import React from 'react'
import { graphql, Link } from "gatsby";

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Sidebar from '../components/Sidebar/index';

const NewsList = props => {
  const { data } = props
  const posts = data.allPrismicBlog.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

    return (
       /* your code to display a list of posts */
       <Layout>
        <Sidebar />
        <div id="main">
          <section className="two">
            <div className="container">

            <header>
              <h2>Новости</h2>
            </header>

            <ul className="news">
              {posts.map((edge) =>{
                return (
                  <li>
                    <div className="publishedDate">Дата публикации: {edge.node.data.publication_date}</div>
                    <Link to={'./news/' + edge.node.uid} className="myLink">
                      <h4>{edge.node.data.title.text}</h4>
                    </Link>
                    <hr align="left"></hr>
                  </li>
                )
              })}
            </ul>

              <div className="row">
              {!isFirst && (
                <div className="col-6 col-12-mobile paginationLeft">
                <Link to={"/newsList/" + prevPage} rel="prev" align="left">
                  ← Предыдущая страница
                </Link>
                </div>
              )}
              {!isLast && (
                <div className="col-6 col-12-mobile paginationRight">
                <Link to={"/newsList/" + nextPage} rel="next">
                  Следующая страница →
                </Link>
                </div>
              )}
              </div>

              <br />
              <div className="col-12 col-12-mobile">
                <Link to='./' className="button">Вернуться на главную</Link>
              </div>

            </div>
          </section>
        </div>
        <PageFooter />
      </Layout>
    )
}

export const query = graphql`
query($skip: Int!, $limit: Int!) {
  allPrismicBlog(sort: {order: DESC, fields: data___publication_date} limit: $limit skip: $skip) {
    edges {
      node {
        uid
        data {
          title {
            text
          }
          publication_date(locale: "ru", formatString: "MMMM Do YYYY")
        }
      }
    }
  }
}
`

export default NewsList;
