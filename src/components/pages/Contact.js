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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d31829.209154411878!2d39.57164941609254!3d-4.287795850523026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x184049e3269666a9%3A0xb04108cd6f581b92!2sDiani%20Beachlifefitness%20kenya%2C%20PH2M%2B3G9%2C%20Diani%20Beach%20Road%2C%20Diani%20Beach!3m2!1d-4.2998458!2d39.583873499999996!4m5!1s0x1840463f2a0b107d%3A0xafa0063ab0f439ad!2sDiani%20Beach!3m2!1d-4.2797626!2d39.5946958!5e0!3m2!1sen!2ske!4v1680487187477!5m2!1sen!2ske"
          width="600"
          height="450"
          title="map"
          style={{ width: '100%', height: '45rem', border: '0px' }}
          allowfullscreen=""
          // samesite="Strict"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <FooterContainer />
    </section>
  );
};

export default Contact;
