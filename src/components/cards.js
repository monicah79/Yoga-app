import React from 'react';
import CardsItem from './CardsItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this EPIC Experiences</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards_right">
            <CardsItem
              src="images/card-1.jpeg"
              text="Enjoy a smooth flow of yoga sequence to awaken, energize, and relax your body."
              label="Relaxation"
              path="/Services"
            />
          </div>
          <div className="cards_left">
            <CardsItem
              src="images/pp-1.jpg"
              text="Go within everyday and find the inner strength so that the
              world will not blow your candle out."
              label="Mindfull stillness"
              path="/Services"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cards;
