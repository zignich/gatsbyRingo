import React from 'react';
import { graphql, Link } from "gatsby";

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Sidebar from '../components/Sidebar/index';

import {FacebookShareButton, TwitterShareButton, VKShareButton, WhatsappShareButton,} from 'react-share';

export const query = graphql`
  query($uid: String!) {
    prismicBlog(uid: { eq: $uid }) {
      uid
      data {
        publication_date(locale: "ru", formatString: "MMMM Do YYYY")
        title {
          text
        }
        content {
          html
        }
        news_cover {
          url
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

const News = props => {

  const title = props.data.prismicBlog.data.title.text
  const content = props.data.prismicBlog.data.content.html
  const publishedDate = props.data.prismicBlog.data.publication_date
  const imageUrl = props.data.prismicBlog.data.news_cover.url
  const pageUrl = props.data.site.siteMetadata.siteUrl + "/news/" + props.data.prismicBlog.uid

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
            <div className="row">
              <div className="col-12 col-12-mobile">
                <img className="image fit cover" src={imageUrl} alt="" />
              </div>
            </div>
            <br />
            <div className="news">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            <div className="row socialLinksBox">
                <strong className="orangeColor">
                  Поделиться новостью:
                </strong>
                <div>
                  <FacebookShareButton url={pageUrl} className="socialLinks">
                    <span class="icon fa-facebook"></span>
                  </FacebookShareButton>
                  <TwitterShareButton url={pageUrl} className="socialLinks">
                    <span class="icon fa-twitter"></span>
                  </TwitterShareButton>
                  <VKShareButton url={pageUrl} className="socialLinks">
                    <span class="icon fa-vk"></span>
                  </VKShareButton>
                  <WhatsappShareButton url={pageUrl} className="socialLinks">
                    <span class="icon fa-whatsapp"></span>
                  </WhatsappShareButton>
                </div>
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
