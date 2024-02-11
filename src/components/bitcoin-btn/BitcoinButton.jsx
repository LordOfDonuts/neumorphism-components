import './BitcoinButton.css';

import React, { useState } from 'react';

import { FaBtc } from 'react-icons/fa';

const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div
      className={`bitcoin-btn-container ${isPressed && 'active'}`}
      onClick={() => setIsPressed(!isPressed)}
    >
      <div className='bitcoin-btn'>
        <FaBtc className='bitcoin-icon' />
      </div>
    </div>
  );
};

export default HeartButton;
