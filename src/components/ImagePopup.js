/* eslint-disable */

import React, { useState } from 'react';
import './ImagePopup.css'

const ImagePopup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      
      <figure className='imp'  data-category={props.label}>
            {/* <img
              src={props.src}
              alt=""
              className="cards__item__img"
            /> */}
            <img className='imp' src={props.src} alt={props.alt} onClick={handleClick} />
          </figure>
      
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <div>
            <img src={props.src2} alt={props.alt} />
            </div>
            <div>
            <p className="prop">{props.caption}</p>
            </div>
            
            <button type='submit' onClick={handleClick}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;