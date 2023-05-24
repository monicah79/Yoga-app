import React from 'react';
import '../../App.css';
import FooterContainer from '../../containers/footer';

const About = () => (
  <>
    <div className="home">
      <section className="hero-1">
        <div className="image" />
      </section>
      <section className="display-home">
        <div>
          <h1 className="home-subtitle">Welcome to Ababil Yoga!</h1>
          <p className="hm-paragraph">
            ABABIL YOGA DIANI is a preferred yoga solution in Africa based in Diani.
            On a mission to promote awareness for mental, emotional and physical
            health accessible for all. ABABIL YOGA DIANI provides high quality practices on yoga
            and mindfulness
            as a theraputic intervention for releasing stress,anger,anxiety, depression and fatigue.
            With a deep reverence and respect for yoga philosophy, ABABIL YOGA DIANI combines
            meditation for stillness and  mindful application for the modern day.
            The aim is to inspire people of all ages, ethnicities,
            and backgrounds across the globe.
            Ababil is certified in Diani and has gained extended training
            from master teachers across Africa
            for over 10 years
          </p>
        </div>

        <div className="mission-container">
          <div className="mission-slot">
            <div className="mission-icons"><i className="fa fa-yoast" aria-hidden="true" /></div>
            <h2 className="mission-headings">MISSION</h2>
            <hr />
            <p className="mission-paragraph">
              Promoting mental health & wellbeing through yoga.
            </p>
          </div>

          <div className="mission-slot">
            <div className="mission-icons"><i className="fa fa-globe" aria-hidden="true" /></div>
            <h2 className="mission-headings">VISION</h2>
            <hr />
            <p className="mission-paragraph">To be the preferred yoga provider at the coast and to the world.</p>
          </div>

          <div className="mission-slot">
            <div className="mission-icons"><i className="fa fa-trophy" aria-hidden="true" /></div>
            <h2 className="mission-headings">ACHIEVEMENTS</h2>
            <hr />
            <p className="mission-paragraph">
              We have managed to teach individuals
              and groups therapeutic intervention for releasing depression,
              anxiety, stress, anger and fatigue.
            </p>
          </div>
        </div>

        <div className="connect">
          <h2 className="connect-head">Connect with ABABIL YOGA DIANI</h2>
          <div className="connect-list">
            <div className="connect-list"><i className="fa fa-facebook-official" aria-hidden="true" /></div>
            <div className="connect-list"><i className="fa fa-linkedin" aria-hidden="true" /></div>
            <div className="connect-list"><i className="fa fa-youtube" aria-hidden="true" /></div>
          </div>
        </div>
      </section>

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

export default About;
