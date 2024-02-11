import './RadioButtons.css';

import React from 'react';

const RadioButtons = () => {
  return (
    <ul className='radio-btns'>
      <li>
        <input type='radio' name='options' id='option-1' />
        <label htmlFor='option-1'>STANDARD</label>
      </li>
      <li>
        <input type='radio' name='options' id='option-2' />
        <label htmlFor='option-2'>PLUS</label>
      </li>
      <li>
        <input type='radio' name='options' id='option-3' />
        <label htmlFor='option-3'>PREMIUM</label>
      </li>
    </ul>
  );
};

export default RadioButtons;
