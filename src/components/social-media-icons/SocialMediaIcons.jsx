import './SocialMediaIcons.css';

import React, { useState } from 'react';

import {
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaTiktok,
  FaSnapchatGhost,
} from 'react-icons/fa';

const SocialMediaIcons = () => {
  const [rowOneItems, setRowOneItems] = useState([
    {
      id: 0,
      icon: <FaInstagram className='icon instagram' />,
      isActive: true,
    },
    {
      id: 1,
      icon: <FaTelegramPlane className='icon telegram' />,
      isActive: false,
    },
    {
      id: 2,
      icon: <FaTiktok className='icon tiktok' />,
      isActive: false,
    },
    {
      id: 3,
      icon: <FaSnapchatGhost className='icon snapchat' />,
      isActive: false,
    },
    {
      id: 4,
      icon: <FaGithub className='icon github' />,
      isActive: true,
    },
  ]);

  const [rowTwoItems, setRowTwoItems] = useState([
    {
      id: 0,
      icon: <FaInstagram className='icon instagram' />,
      isActive: false,
    },
    {
      id: 1,
      icon: <FaTelegramPlane className='icon telegram' />,
      isActive: true,
    },
    {
      id: 2,
      icon: <FaTiktok className='icon tiktok' />,
      isActive: false,
    },
    {
      id: 3,
      icon: <FaSnapchatGhost className='icon snapchat' />,
      isActive: false,
    },
    {
      id: 4,
      icon: <FaGithub className='icon github' />,
      isActive: false,
    },
  ]);

  const changeRowActive = (setRowitems, rowItems, index) => {
    setRowitems(
      rowItems.map((item) =>
        item.id === index ? { ...item, isActive: !item.isActive } : { ...item }
      )
    );
  };

  return (
    <div className='social-media-icons'>
      <ul className='row row-1'>
        {rowOneItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() =>
                changeRowActive(setRowOneItems, rowOneItems, item.id)
              }
              className={`${rowOneItems[item.id].isActive ? 'active' : ''}`}
            >
              {item.icon}
            </li>
          );
        })}
      </ul>
      <ul className='row row-2'>
        {rowTwoItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() =>
                changeRowActive(setRowTwoItems, rowTwoItems, item.id)
              }
              className={`${rowTwoItems[item.id].isActive ? 'active' : ''}`}
            >
              {item.icon}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
