import './AnalogClock.css';

import React, { useEffect } from 'react';

const AnalogClock = () => {
  const changeTimeDegree = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const secondsDegree = seconds * 6;
    const minutesDegree = minutes * 6;
    const hoursDegree = hours * 15;

    document.documentElement.style.setProperty(
      '--seconds-degree',
      `${secondsDegree}deg`
    );

    document.documentElement.style.setProperty(
      '--minutes-degree',
      `${minutesDegree}deg`
    );

    document.documentElement.style.setProperty(
      '--hours-degree',
      `${hoursDegree}deg`
    );
  };

  useEffect(() => {
    changeTimeDegree();
  }, [])
  

  setInterval(changeTimeDegree, 500);

  return (
    <div className='analog-clock'>
      <div className='middle-gear'></div>
      <ul className='clock-hands'>
        <li className='hand-container second-hand-container'>
          <div className='hand second-hand'></div>
        </li>
        <li className='hand-container minute-hand-container'>
          <div className='hand minute-hand'></div>
        </li>
        <li className='hand-container hour-hand-container'>
          <div className='hand hour-hand'></div>
        </li>
      </ul>
      <ul className='sticks'>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
        <li className='stick-container'>
          <div className='stick'></div>
        </li>
      </ul>
    </div>
  );
};

export default AnalogClock;
