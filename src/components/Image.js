import React from 'react';
import ImagePopup from './ImagePopup';

const MyComponent = () => {
  return (
    <>
      <h1>My Component</h1>
      <ImagePopup
        src='images/card-5.jpeg'
        alt="My Image"
        caption="This is my image"
      />
      <ImagePopup
        src='images/card-5.jpeg'
        alt="My Image"
        caption="This is my image"
      />
      <ImagePopup
        src='images/card-5.jpeg'
        src2='images/card-2.jpeg'
        alt="My Image"
        caption="This is my image"
      />
      <ImagePopup
        src='images/card-5.jpeg'
        alt="My Image"
        caption="This is my image"
      />
    </>
  );
};

export default MyComponent;