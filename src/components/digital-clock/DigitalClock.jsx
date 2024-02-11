import './DigitalClock.css';
import React, { useState } from 'react';

const Clock = () => {
  const getTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours === 0) {
      setPartOfDay('AM');
      hours = 12;
    } else if (hours > 12) {
      hours %= 12;
      setPartOfDay('PM');
    } else {
      setPartOfDay('AM');
    }

    minutes = minutes >= 10 ? minutes : '0' + minutes;
    hours = hours >= 10 ? hours : '0' + hours;
    seconds = seconds >= 10 ? seconds : '0' + seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  const [partOfDay, setPartOfDay] = useState();
  const [currentTime, setCurrentTime] = useState(getTime);

  const timeNow = () => {
    setCurrentTime(getTime());
  };

  setInterval(timeNow, 500);

  return (
    <div className='digital-clock' onClick={timeNow}>
      <p>
        {currentTime} <span>{partOfDay}</span>
      </p>
    </div>
  );
};

export default Clock;
