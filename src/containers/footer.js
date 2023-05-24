/* eslint-disable */
import React from 'react';
import './footer.css';

function FooterContainer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container-item">
          <div className="footer-item">
            <i className="fa fa-map-marker" aria-hidden="true" />
            <p>Nomads Hotel.
               <br />
                Diani</p>
          </div>
          <div className="footer-item">
            <i className="fa fa-mobile" aria-hidden="true" />
            <p>+254 725 839 017</p>
          </div>
          <div className="footer-item">
            <i className="fa fa-envelope" aria-hidden="true" />
            <p>samuelkitli2930@gmail.com</p>
          </div>
         
        </div>

        <div className="container-item">
          <h4>Services</h4>
          <ul>
            <li>meditation</li>
            <li>mindful yoga</li>
            <li>Acro yoga</li>
            <li>Prenatal</li>
          </ul>
        </div>

        <div className="container-item">
          <h4>Support</h4>
          <ul>
            <li>Contact Support</li>
            <li>Q & A</li>
            <li>Careers</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="container-item">
          <h4>Connect With Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterContainer;
