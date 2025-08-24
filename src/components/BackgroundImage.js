import React from 'react';
import PropTypes from 'prop-types';

function BackgroundImage({ src, alt, position = 'top-right', className = '' }) {
  const positionClass = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    // 必要に応じて 'bottom-right' など追加可
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`absolute ${positionClass[position]} w-1/3 max-w-sm opacity-30 pointer-events-none z-0 ${className}`}
    />
  );
}

BackgroundImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  position: PropTypes.oneOf(['top-right', 'top-left']),
  className: PropTypes.string,
};

export default BackgroundImage;
