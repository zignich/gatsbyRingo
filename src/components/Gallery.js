import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const GalleryBlock = () => {

  const data = useStaticQuery(graphql`
    query {
      prismicGallery {
        data {
          image1 {
            url
          }
          image2 {
            url
          }
          image3 {
            url
          }
          image4 {
            url
          }
          image5 {
            url
          }
          image6 {
            url
          }
        }
      }
    }
    `)

    const image1 = data.prismicGallery.data.image1.url;
    const image2 = data.prismicGallery.data.image2.url;
    const image3 = data.prismicGallery.data.image3.url;
    const image4 = data.prismicGallery.data.image4.url;
    const image5 = data.prismicGallery.data.image5.url;
    const image6 = data.prismicGallery.data.image6.url;

    return (
      <section id="gallery" className="two noPaddings">
        <div className="container noPaddings">

          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={image1} alt="" />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={image2} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={image3} alt="" />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={image4} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={image5} alt="" />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={image6} alt="" />
            </div>
          </div>
        </div>
      </section>
    )

}
export default GalleryBlock
