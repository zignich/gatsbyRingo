import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import Sidebar from '../components/Sidebar/index';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';


const sections = [
  { id: 'top', name: 'На главную', icon: 'fa-home' },
  { id: 'about', name: 'О нас', icon: 'fa-users' },
  { id: 'advantages', name: 'Преимущества', icon: 'fa-star' },
  { id: 'gallery', name: 'Галерея', icon: 'fa-th' },
  { id: 'timetable', name: 'Расписание', icon: 'fa-calendar' },
  { id: 'contact', name: 'Контакты', icon: 'fa-map-marker' },
];



const IndexPage = () => {

  const data = useStaticQuery(graphql`
      query {
        prismicFirstBlock {
          data {
            title0 {
              text
            }
            title1 {
              text
            }
            title2 {
              text
            }
            content0 {
              html
            }
            content1 {
              html
            }
            content2 {
              html
            }
            benefit1
            benefit2
            benefit3
            benefit4
            title3 {
              text
            }
            day1
            day2
            day3
            ttime1
            ttime2
            content3 {
              html
            }
            title4 {
              text
            }
            content4 {
              html
            }
            phone {
              html
            }
            email
          }
        }
      }
  `)
  const dataTitle0 = data.prismicFirstBlock.data.title0.text;
  const dataTitle1 = data.prismicFirstBlock.data.title1.text;
  const dataTitle2 = data.prismicFirstBlock.data.title2.text;
  const dataTitle3 = data.prismicFirstBlock.data.title3.text;
  const dataTitle4 = data.prismicFirstBlock.data.title4.text;

  const dataContent0 = data.prismicFirstBlock.data.content0.html;
  const dataContent1 = data.prismicFirstBlock.data.content1.html;
  const dataContent2 = data.prismicFirstBlock.data.content2.html;
  const dataContent3 = data.prismicFirstBlock.data.content3.html;
  const dataContent4 = data.prismicFirstBlock.data.content4.html;

  const dataBenefit1 = data.prismicFirstBlock.data.benefit1;
  const dataBenefit2 = data.prismicFirstBlock.data.benefit2;
  const dataBenefit3 = data.prismicFirstBlock.data.benefit3;
  const dataBenefit4 = data.prismicFirstBlock.data.benefit4;
  const dataDay1 = data.prismicFirstBlock.data.day1;
  const dataDay2 = data.prismicFirstBlock.data.day2;
  const dataDay3 = data.prismicFirstBlock.data.day3;
  const dataTtime1 = data.prismicFirstBlock.data.ttime1;
  const dataTtime2 = data.prismicFirstBlock.data.ttime2;
  const dataPhone = data.prismicFirstBlock.data.phone.html;
  const dataEmail = data.prismicFirstBlock.data.email;


  return (
  <Layout>
    <Sidebar sections={sections} />

    <div id="main">

      <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="whiteText">
                {dataTitle0}
              </h2>
              <hr></hr>
              <p className="whiteText">
                <div dangerouslySetInnerHTML={{ __html: dataContent0 }} />
              </p>
            </header>

            <footer id="buttonMargin">
              <Scroll type="id" element={'about'}>
                <a href="#about" className="button">
                  Узнать больше
                </a>
              </Scroll>
              <br /><br />
              <Scroll type="id" element={'about'}>
                <span class="icon fa-chevron-down"></span>
              </Scroll>
            </footer>
          </div>
      </section>

      <section id="about" className="two">
        <div className="container">
          <header>
            <h2>{dataTitle1}</h2>
            <hr></hr>
          </header>
          <div dangerouslySetInnerHTML={{ __html: dataContent1 }} />
        </div>
      </section>

      <section id="advantages" className="three">
        <div className="container">
          <header>
            <h2 className="whiteText">{dataTitle2}</h2>
            <hr className="white"></hr>
          </header>

          <div className="row whiteText boldText">
            <div className="col-3 col-12-mobile">
              <span class="icon fa-check-circle iconSizeBig"></span>
              <p><br />{dataBenefit1}</p>
            </div>
            <div className="col-3 col-12-mobile">
              <span class="icon fa-check-circle iconSizeBig"></span>
              <p><br />{dataBenefit2}</p>
            </div>
            <div className="col-3 col-12-mobile">
              <span class="icon fa-check-circle iconSizeBig"></span>
              <p><br />{dataBenefit3}</p>
            </div>
            <div className="col-3 col-12-mobile">
              <span class="icon fa-check-circle iconSizeBig"></span>
              <p><br />{dataBenefit4}</p>
            </div>
          </div>

          <div className="whiteText">
            <div dangerouslySetInnerHTML={{ __html: dataContent2 }} />
          </div>
        </div>
      </section>

      <section id="gallery" className="two noPaddings">
        <div className="container noPaddings">

          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={pic1} alt="" />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={pic2} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={pic3} alt="" />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={pic4} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={pic5} alt="" />
            </div>
            <div className="col-6 col-12-mobile noPaddings">
              <img className="image fit cover" src={pic6} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="timetable" className="three">
        <div className="container">
          <header>
            <h2 className="whiteText">{dataTitle3}</h2>
            <hr class="white"></hr>
          </header>
          <table className="whiteText">
            <tr>
              <td><h4 className="whiteText">#</h4></td>
              <td><h4 className="whiteText">1-ая смена</h4></td>
              <td><h4 className="whiteText">2-ая смена</h4></td>
            </tr>
            <tr>
              <td>{dataDay1}</td>
              <td>{dataTtime1}</td>
              <td>{dataTtime2}</td>
            </tr>
            <tr>
              <td>{dataDay2}</td>
              <td>{dataTtime1}</td>
              <td>{dataTtime2}</td>
            </tr>
            <tr>
              <td>{dataDay3}</td>
              <td>{dataTtime1}</td>
              <td>{dataTtime2}</td>
            </tr>
          </table>
          <p className="whiteText">
            <div dangerouslySetInnerHTML={{ __html: dataContent3 }} />
          </p>
        </div>
      </section>


      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>{dataTitle4}</h2>
            <hr></hr>
          </header>
          <div dangerouslySetInnerHTML={{ __html: dataContent4 }} />
          <div className="row">
            <div className="col-6 col-12-mobile">
              <span class="icon fa-phone orangeColor"></span>
              <div dangerouslySetInnerHTML={{ __html: dataPhone }} />
            </div>
            <div className="col-6 col-12-mobile">
              <span class="icon fa-envelope orangeColor"></span>
              <p>
                <a href={"mailto:" + dataEmail}>
                  {dataEmail}
                </a>
              </p>
            </div>
          </div>

          <iframe title="location on google map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1453.6095649492565!2d76.84364167301632!3d43.22586512650406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369cde1d04293%3A0x3cf37df6987d2231!2sInnova+SPORT!5e0!3m2!1sen!2skz!4v1554798174050!5m2!1sen!2skz" width="800" height="500"></iframe>

        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
  )

};


export default IndexPage;
