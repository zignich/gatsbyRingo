import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const GalleryBlock = () => {

  const data = useStaticQuery(graphql`
    query {
      prismicGallery {
        data {
          image1 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image5 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image6 {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    `)

    //const image1 = data.prismicGallery.data.image1.url;
    //const image2 = data.prismicGallery.data.image2.url;
    //const image3 = data.prismicGallery.data.image3.url;
    //const image4 = data.prismicGallery.data.image4.url;
    //const image5 = data.prismicGallery.data.image5.url;
    //const image6 = data.prismicGallery.data.image6.url;

    return (
      <section id="gallery" className="two noPaddings">
        <div className="container noPaddings">

        <div className="row">
          <div className="col-6 col-12-mobile noPaddings">
            <Img className="image fit cover" fluid={data.prismicGallery.data.image1.localFile.childImageSharp.fluid} />
          </div>
          <div className="col-6 col-12-mobile noPaddings">
            <Img className="image fit cover" fluid={data.prismicGallery.data.image2.localFile.childImageSharp.fluid} />
          </div>
        </div>

          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <Img className="image fit cover" fluid={data.prismicGallery.data.image3.localFile.childImageSharp.fluid} />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <Img className="image fit cover" fluid={data.prismicGallery.data.image4.localFile.childImageSharp.fluid} />
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <Img className="image fit cover" fluid={data.prismicGallery.data.image5.localFile.childImageSharp.fluid} />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <Img className="image fit cover" fluid={data.prismicGallery.data.image6.localFile.childImageSharp.fluid} />
            </div>
          </div>

        </div>
      </section>
    )

}
export default GalleryBlock
