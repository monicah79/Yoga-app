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
            <div>
            <img className='imp-1' src={props.src} alt={props.alt} onClick={handleClick} />
            <div class="centered">{props.text}</div>
            <div class="bottom-left">{props.time}</div>
            </div>
            
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
          </div>  
            <button type='submit' onClick={handleClick}>Close</button>
          
        </div>
      )}
    </>
  );
};

export default ImagePopup;