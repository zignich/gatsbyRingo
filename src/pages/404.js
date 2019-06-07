import React from 'react';
import { Link } from "gatsby"

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';

import errorImage from '../assets/images/404errorImg.png';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div id="wrapper">
      <div id="main">
        <section className="two">
          <div className="container">
            <section>
              <h2>Упс, данной страницы не существует!</h2>
              <div className="col-12 noPaddings">
                <img className="image fit" src={errorImage} alt="" />
              </div>
              <br />
              <Link to="/" className="button">Вернуться на главную</Link>
            </section>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
