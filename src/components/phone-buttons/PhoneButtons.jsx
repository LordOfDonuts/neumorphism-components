import './PhoneButtons.css';

import React from 'react';

const PhoneButtons = () => {
  return (
    <ul className='phone-buttons'>
      <li>
        <input type='radio' name='call-option' id='call-option-1' />
        <label htmlFor='call-option-1' className='accept'>Accept</label>
      </li>
      <li>
        <input type='radio' name='call-option' id='call-option-2' />
        <label htmlFor='call-option-2' className='reject'>Reject</label>
      </li>
    </ul>
  );
};

export default PhoneButtons;
