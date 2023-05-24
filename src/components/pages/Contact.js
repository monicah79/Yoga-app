/* eslint-disable */
import React, { useRef, useState } from 'react';
import '../../App.css';
import emailjs from '@emailjs/browser';
import FooterContainer from '../../containers/footer';

const Result = () => <p>Your message has been successfully sent</p>;

const Contact = () => {
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_nxw6bo7',
        form.current,
        'qYkxMZwUhXKdNNR6T',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
    setResult(true);
  };

  return (
    <section>
      <div className="login-banner">
        <h1 className="top">Contact Us</h1>
      </div>

      <div className="contact-body">
        <div className="md">
          <h2 className="text-black">Promoting mental health & wellbeing.</h2>
          <p className="text-p">
            At Ababil yoga, we are dedicated to teaching yoga to
            individuals and groups as therapeutic
            invention
          </p>
          <h3 className="icon-follow">Follow Us On</h3>
          <div className="connect-list">
            <i className="fa fa-facebook-official" aria-hidden="true" />
            <i className="fa fa-linkedin" aria-hidden="true" />
            <div className="fal">
              <i className="fa fa-youtube" aria-hidden="true" />
            </div>

          </div>

        </div>

        <div className="input-body">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <h3 className="text">Leave Us Your Info</h3>
            <span className="span" />
            <input
              className="input"
              placeholder="Full Name *"
              type="text"
            />
            <input
              className="input"
              placeholder="Email Address *"
              type="email"
            />
            <select className="options input">
              <option>Select Class</option>
              <option>Meditation</option>
              <option>Relaxing Massage</option>
              <option>Thai Massage</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Prenatal</option>
              <option>Mindful power yoga vinyasa</option>
              <option>Acro yoga</option>
              <option>Story telling</option>
            </select>
            <textarea placeholder="Comment" className="submit input" />
            <button type="submit" className="btn-submit">
              submit
            </button>
            <div>{result ? <Result /> : null}</div>
          </form>
        </div>

      </div>
      <div className="iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d254667.1856333792!2d39.45562033596695!3d-4.186015291940252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d-4.3280619!2d39.571700199999995!5e0!3m2!1sen!2ske!4v1682446194848!5m2!1sen!2ske"
         width="600" 
         height="450" 
         style={{border:0, width: '100%'}} 
         allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    </section>
  );
};

export default Contact;
