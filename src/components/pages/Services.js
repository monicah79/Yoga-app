import React from 'react';
import MyComponent from '../Image';
import '../../App.css';
import FooterContainer from '../../containers/footer';

export default function Services() {
  return (
    <>
      <div className="services">
        <h1 className="ser-2">
          SERVICES
        </h1>
        <h2 className="ser-1">
          Welcome to Ababil Yoga where we prioritize
          <br />
          on mental health and healthy living
        </h2>
      </div>

      <MyComponent />
      <FooterContainer />
    </>
  );
}
