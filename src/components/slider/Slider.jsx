import './Slider.css';
import React, { useState } from 'react';

const Slider = () => {
  const [sliderValue, setSliderValue] = useState(72);

  return (
    <div className='slider-container'>
      <input
        type='range'
        className='range-input'
        value={sliderValue}
        min={0}
        max={100}
        onChange={(e) => setSliderValue(e.target.value)}
      />
      <span className='range-text'>{sliderValue}</span>
    </div>
  );
};

export default Slider;
