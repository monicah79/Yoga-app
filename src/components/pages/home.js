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
      <div className="hm-div">
        <div className="text">
          <h2 className="hm-h1">Mission</h2>
          <p className="hm-p">
            Promoting mental health & wellbeing through yoga by teaching individuals and groups as
            a therapeutic intervention for releasing depression, anxiety, stress, anger and fatigue.
          </p>
        </div>
        <div className="text">
          <h2 className="hm-h1">Vision</h2>
          <p className="hm-p">
            To be the preferred yoga provider at the coast and to the world.
          </p>
        </div>
      </div>
      <div className="down">
        <p className="text-contact">
          <i className="fa fa-phone" aria-hidden="true" />
          +254 725 839 017
        </p>
        <p className="text-email">
          <i className="fa fa-envelope-o" aria-hidden="true" />
          samuelkitli2930@gmail.com
        </p>

      </div>
      <FooterContainer />
    </>
  );
}

export default Home;
