import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Sidebar from '../components/Sidebar/index';

const NewsPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allPrismicBlog(sort: {order: DESC, fields: last_publication_date}) {
        edges {
          node {
            last_publication_date(locale: "ru", formatString: "MMMM Do YYYY")
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
    `)

  return (
    <Layout>
      <Sidebar />
      <div id="main">
        <section className="two">
          <div className="container">
            <header>
              <h2>Новости</h2>
            </header>
            <ul className="news">
              {data.allPrismicBlog.edges.map((edge) =>{
                return (
                  <li>
                    <div className="publishedDate">Дата публикации: {edge.node.last_publication_date}</div>
                    <Link to={'./news/' + edge.node.uid} className="myLink">
                      <h4>{edge.node.data.title.text}</h4>
                    </Link>
                    <hr align="left"></hr>
                  </li>
                )
              })}
            </ul>
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

export default NewsPage;
