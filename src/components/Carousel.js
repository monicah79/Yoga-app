/* eslint-disable */
import React, { useState } from 'react';
import { CarouselItem } from './CarouselItem';
import './Carousel.css';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: 'Healthy Daily life',
      description:
        '"When you think about quiting think about why you started in the first place"',
      src: 'images/home-2.webp',
    },
    {
      title: 'Improve Your Mindset',
      description:
        '"Life is a reflection of your thinking. If you don’t like what you see, the only thing to be changed is your thoughts." ',
      src: 'images/home-5.webp',
    },
    {
      title: 'Body & Mind Balance',
      description:
        '"To me good health is more than just exercise and diet, Its really a point of view and all mental attitude you have about yourself."',
      src: 'images/home-4.webp',
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item) => <CarouselItem item={item} width="100%" />)}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
          {' '}
        </button>
        <div className="indicators">
          {items.map((item, index) => (
            <button
              className="indicator-buttons"
              onClick={() => {
                updateIndex(index);
              }}
            >
              <span
                className={`material-symbols-outlined ${
                  index === activeIndex
                    ? 'indicator-symbol-active'
                    : 'indicator-symbol'
                }`}
              >
               <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
              </span>
            </button>
          ))}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
        </button>
      </div>
    </div>
  );
};
