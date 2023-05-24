import React from 'react';
import '../../App.css';
import SectionPage from '../SectionPage';
import { Carousel } from '../Carousel';
import Cards from '../cards';
import FooterContainer from '../../containers/footer';

function Home() {
  return (
    <>
      <SectionPage />
      <Cards />
      <Carousel />

      <div className="down">
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
