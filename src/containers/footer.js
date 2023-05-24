/* eslint-disable */
import React from "react";
import "./footer.css";

function FooterContainer() {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="container-item">
        <h4>Contact</h4>
        <div className="footer-item">
          <i className="fa fa-map-marker" aria-hidden="true" /> <span className="footer-spn">Nomads Hotel, Diani</span>
        </div>
        <div className="footer-item">
          <i className="fa fa-mobile" aria-hidden="true" />
          <span className="footer-spn">+254 725 839 017</span>
        </div>
        <div className="footer-item">
          <i className="fa fa-envelope" aria-hidden="true" />
          <span className="footer-spn">samuelkitli2930@gmail.com</span>
        </div>
      </div>

      <div className="container-item">
        <h4>Services</h4>
        <p>
          <a href="#">meditation</a>
        </p>
        <p>
          <a href="#">mindful yoga</a>
        </p>
        <p>
          <a href="#">Acro yoga</a>
        </p>
        <p>
          <a href="#">Prenatal</a>
        </p>
      </div>

      <div className="container-item">
        <h4>Support</h4>
        <p>
          <a href="#">Contact Support</a>
        </p>
        <p>
          <a href="#">Q & A</a>
        </p>
        <p>
          <a href="#">Careers</a>
        </p>
        <p>
          <a href="#">Privacy</a>
        </p>
      </div>

      <div className="container-item">
        <h4>Connect With Us</h4>
        <p>
          <a href="#">Facebook</a>
        </p>
        <p>
          <a href="#">Twitter</a>
        </p>
        <p>
          <a href="#">Instagram</a>
        </p>
        <p>
          <a href="#">LinkedIn</a>
        </p>
      </div>
      </div>
    </footer>
  );
}

export default FooterContainer;
