import React from 'react';
import ImagePopup from './ImagePopup';

const ServicesImages = () => (
  <>
    <div className="img-container">
      <ImagePopup
        text="meditation"
        time="Mon-Fri 7am - 8am"
        title="Meditation"
        src="images/img-2.jpg"
        src2="images/img-3.jpg"
        alt="Meditation"
        label="Meditation"
        caption="Still your mind with a guided powerful relaxing and soothing meditation from your yoga teacher."
      />
      <ImagePopup
        text="Prenatal"
        time="Mon-Fri 7am - 8am"
        src="images/img-4.jpg"
        src2="images/pre.jpg"
        alt="My Image"
        caption="Take the opportunity of being a mum by creating a mother's
        relationship to your unborn baby and optimum possioning of your child in the womb"
      />
      <ImagePopup
        text="Mindful power yoga vinyasa"
        time="Mon-Fri 7am - 8am"
        src="images/img-5.jpg"
        src2="images/img-6.jpg"
        alt="My Image"
        caption=" Enjoy a smooth flow of yoga sequence to awaken, energize, and relax your body.
         Physically, mentally, and emotionally."
      />
      <ImagePopup
        text="Thai yoga massage"
        time="Mon-Fri 7am - 8am"
        src="images/img-7.jpg"
        src2="images/img-8.jpg"
        alt="My Image"
        caption="Enjoy a moment with a traditional therapy.
        Combining acupressure indian ayurvedic principles, and assisted yoga postures."
      />
      <ImagePopup
        text="Acro yoga"
        time="Mon-Fri 7am - 8am"
        src="images/img-9.jpg"
        src2="images/img-10.jpg"
        alt="My Image"
        caption="Have fun by strengthening your body by combining yoga and acrobatics"
      />
      <ImagePopup
        text="Relaxing massage"
        time="Mon-Fri 7am - 8am"
        src="images/r-1.jpg"
        src2="images/r-2.jpg"
        alt="My Image"
        caption="Enjoy a smooth flow of relaxing massage to allow elemination of muscle ache and stress."
      />
    </div>

  </>
);

export default ServicesImages;
