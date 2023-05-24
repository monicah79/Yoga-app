/* eslint-disable */
import React from 'react';

export const CarouselItem = ({ item, width }) => (
  <div className="carousel-item" style={{ width }}>
    <img className="carousel-img" src={item.src} />
    <div>
      <div className="carousel-title">{item.title}</div>
      <div className="carousel-item-text">{item.description}</div>
    </div>
  </div>
);
