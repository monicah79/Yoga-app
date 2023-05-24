import React from 'react';
import '../../App.css';
import SectionPage from '../SectionPage';
import Cards from '../cards';
import FooterContainer from '../../containers/footer';

function Home() {
  return (
    <>
      <SectionPage />
      <Cards />

      <div className="Home-image-container">
        <div className="Home-image">
          <img src="images/home-1.jpg" alt="logo" />
        </div>
        <div className="Home-text">
          <div className="Texts-quote">
            <h2>Hello</h2>
            <p>hellofjffjd</p>
          </div>

          <div className="Texts-quote">
            <h2>Hello</h2>
            <p>hellofjffjd</p>
          </div>

          <div className="Texts-quote">
            <h2>Hello</h2>
            <p>hellofjffjd</p>
          </div>
        </div>
      </div>

      <div className="down">
        {/* <p className="text-contact">
          <i className="fa fa-phone" aria-hidden="true" />
          +254 725 839 017
        </p>
        <p className="text-email">
          <i className="fa fa-envelope-o" aria-hidden="true" />
          samuelkitli2930@gmail.com
        </p> */}

        <div>
          <p>150+ Yoga classes</p>
        </div>
        <div className="Years">
          <p>5 Years Experience</p>
        </div>
        <div>
          <p>1500+ clients</p>
        </div>

      </div>
      <FooterContainer />
      <div className="rights">
        <p>
          COPYRIGHT © 2023 YOGA WITH ABABILYOGA, LLC ·
          TERMS & CONDITIONS ·
          PRIVACY POLICY ·
          NEWSLETTER ·
          SUPPORT
        </p>
      </div>
    </>
  );
}

export default Home;
