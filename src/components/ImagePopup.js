/* eslint-disable */

import React, { useState } from "react";
import "./ImagePopup.css";
import { Card } from "@mui/material";

const ImagePopup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Card elevation={6} style={{borderRadius:10}} className="service-container" data-category={props.label}>
        <div className="service-image-wrapper">
          <img
            className="service-img"
            src={props.src}
            alt={props.alt}
            onClick={handleClick}
          />
        </div>
        <div className="service-content">
          <div className="service-content-left">
          <h5>{props.text}</h5>
          <p>{props.time}</p>
          </div>
          <div className="service-content-right">
            <button className="more-btn" onClick={handleClick}>View More</button>
          </div>
        </div>
        
      </Card>

      {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <div className="pop-imges">
              <img src={props.src2} alt={props.alt} />
            </div>
            <div>
              <h3 className="prop">{props.caption}</h3>
              <h4 className="time">We open everyday </h4>
              <h5 className="tm">
                {" "}
                Morning sessions starts at 7 am and ends at 8am
                <br />
                Evening sessions starts at 5pm and ends at 7pm
              </h5>
            </div>
            <button type="submit" onClick={handleClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePopup;
