// src/components/BackgroundImages.js
import React from 'react';
import PropTypes from 'prop-types';

import rightImage from '../assets/bg_1.png'; 
import leftImage from '../assets/bg_2.png';
import bottomRightImage from '../assets/cooking.png';
import bottomLeftImage from '../assets/winter_mono.png';

const imageConfigs = [
  { src: rightImage, alt: 'bg_1.png', position: 'top-right' },
  { src: leftImage, alt: 'bg_2.png', position: 'top-left' },
  { src: bottomRightImage, alt: 'cooking.png', position: 'bottom-right' },
  { src: bottomLeftImage, alt: 'winter_mono.png', position: 'bottom-left' },
];

const positionClass = {
  'top-right': 'top-0 right-0',
  'top-left': 'top-0 left-0',
  'bottom-right': 'bottom-96 right-0',
  'bottom-left': 'bottom-96 left-0',
};

function BackgroundImages({ className = '' }) {
  return (
    <>
      {imageConfigs.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`absolute ${positionClass[img.position]} w-1/3 max-w-sm opacity-30 pointer-events-none z-0 ${className}`}
        />
      ))}
    </>
  );
}

BackgroundImages.propTypes = {
  className: PropTypes.string,
};

export default BackgroundImages;
