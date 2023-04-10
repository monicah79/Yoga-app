import React from 'react';
import '../../App.css'
import { FooterContainer } from '../../containers/footer';
// import webpic from '../webpic.jpg';

// import './About.css'

const About = () => (
<div className="home">
    
    <div className="display-home">
       <div className='image'>
            {/* <img className="img" src={webpic} alt="logo" /> */}
        </div>
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
         The aim inspire people of all ages, ethnicities, 
         and backgrounds across the globe.
         Ababil is certified in Diani and has gained extended training from master teachers across Africa
         for over 10 years
      </p>
    </div>
     
     <div className='connect'>
     <h2 className='connect-head'>Connect with ABABIL YOGA DIANI</h2>
         <div className='connect-list'  >
         <i  class="fa fa-facebook-official" aria-hidden="true"></i>
         <i class="fa fa-linkedin" aria-hidden="true"></i>
         <div className='fal'><i   class="fa fa-youtube" aria-hidden="true"></i></div>
         </div>
         
     </div>

     <FooterContainer/>
</div>
         
    
    
  </div>
);

export default About;
