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
      <img src={props.src} alt={props.alt} onClick={handleClick} />
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <img src={props.src2} alt={props.alt} />
            <p className="prop">{props.caption}</p>
            <button type='submit' onClick={handleClick}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;