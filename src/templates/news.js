import React from 'react';
import { graphql, Link } from "gatsby";

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Sidebar from '../components/Sidebar/index';

export const query = graphql`
  query($uid: String!) {
    prismicBlog(uid: { eq: $uid }) {
      last_publication_date(locale: "ru", formatString: "MMMM Do YYYY")
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`

const News = props => {

  const title = props.data.prismicBlog.data.title.text
  const content = props.data.prismicBlog.data.content.html
  const publishedDate = props.data.prismicBlog.last_publication_date

  return (
    <Layout>
      <Sidebar />
      <div id="main">
        <section className="two">
          <div className="container">
            <header>
              <h2>{title}</h2>
              <hr />
            </header>
            <p className="publishedDate">Дата публикации: {publishedDate}</p>
            <div className="news">
            <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <br />
            <div className="row">
              <div className="col-12 col-12-mobile">
                <Link to='./' className="button">Вернуться на главную</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <PageFooter />
    </Layout>
  )
}
export default News;
