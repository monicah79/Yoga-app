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
            {/* <div class="centered">{props.text}</div> */}
            <div class="bottom-left">
              <p>{props.text}</p>
              <p>{props.time}</p>
            </div>
            </div>
            
      </figure>
      
      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <div>
            <img src={props.src2} alt={props.alt} />
            </div>
            <div >
            <h3 className="prop">{props.caption}</h3>
            <h4 className='time'>We open everyday </h4>
           <h5 className='tm'> Morning sessions starts at 7 am and ends at 8am<br />
            Evening sessions starts at 5pm and ends at 7pm</h5>
            
            
            </div>
            <button type='submit' onClick={handleClick}>Close</button>
          </div>  
            
          
        </div>
      )}
    </>
  );
};

export default ImagePopup;