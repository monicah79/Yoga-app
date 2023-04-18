import React from 'react';
import ImagePopup from './ImagePopup';

const MyComponent = () => (
  <>
    <div className="img-container">
      <ImagePopup
        className="img-img"
        title="Meditation"
        src="images/img-2.jpg"
        src2="images/img-3.jpg"
        alt="Meditation"
        label="Meditation"
        caption="Still your mind with a guided powerful relaxing and soothing meditation from your yoga teacher."
      />
      <ImagePopup
        src="images/img-4.jpg"
        src2="images/pre.jpg"
        alt="My Image"
        caption="Take the opportunity of being a mum by creating a mother's
        relationship to your unborn baby and optimum possioning of your child in the womb"
      />
      <ImagePopup
        src="images/img-5.jpg"
        src2="images/img-6.jpg"
        alt="My Image"
        caption="Enjoy a moment with a traditional therapy.
        Combining acupressure indian ayurvedic principles, and assisted yoga postures."
      />
      <ImagePopup
        src="images/img-7.jpg"
        src2="images/img-8.jpg"
        alt="My Image"
        caption="Enjoy a smooth flow of yoga sequence to awaken,
        energize, and relax your body. Physically, mentally, and emotionally."
      />
      <ImagePopup
        src="images/img-9.jpg"
        src2="images/img-10.jpg"
        alt="My Image"
        caption="Have fun by strengthening your body by combining yoga and acrobatics"
      />
      <ImagePopup
        src="images/img-9.jpg"
        src2="images/img-10.jpg"
        alt="My Image"
        caption="Have fun by strengthening your body by combining yoga and acrobatics"
      />
    </div>

  </>
);

export default MyComponent;
