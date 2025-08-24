import React from 'react';
import logoImage from '../assets/logo192.png'; // 画像のパスに注意

function LogoImage() {
  return (
    <div className="flex justify-center items-center mt-10">
      <img
        src={logoImage}
        alt="ロゴ画像"
        className="w-full max-w-3xl rounded-lg shadow-lg transform scale-90 opacity-0 animate-fadeZoom"
      />
    </div>
  );
}

export default LogoImage;
