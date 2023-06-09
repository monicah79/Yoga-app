import React from 'react';
import Button from './Button';
import './SectionPage.css';
import '../App.css';

function SectionPage() {
  return (
    <div className="hero-container">
      <h1>
        <span>FEEL</span>
        GOOD
      </h1>
      <p className="p1-home">Give priority to your mental health</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Our Classes
        </Button>
      </div>
      <div className="flex">
        <span className="w-[35px] bg-[#FF0336] h-[2.5px] mr-6" />
        <div className="text-white ">
          <div><i className="fa fa-facebook-square" aria-hidden="true" /></div>
          <div><i className="fa-brands  fa-twitter" /></div>
          <div><i className="fa-brands  fa-linkedin-in " /></div>

        </div>
      </div>

    </div>
  );
}

export default SectionPage;
