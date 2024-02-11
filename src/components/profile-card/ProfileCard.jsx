import './ProfileCard.css';

import React from 'react';

import ProfileIcon from '../../images/profile-icon.png';

import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import { FaHeart } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa6';
import { IoArrowRedo } from 'react-icons/io5';

import { SlOptionsVertical } from 'react-icons/sl';
import { FaArrowLeft } from 'react-icons/fa6';

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <ul className='top-icons'>
        <li className='top-icon-container'>
          <FaArrowLeft className='top-icon' />
        </li>
        <li className='top-icon-container'>
          <SlOptionsVertical className='top-icon' />
        </li>
      </ul>
      <div className='portrait'>
        <img src={ProfileIcon} alt='' className='portrait-picture' />
      </div>
      <p className='name'>Ivan</p>
      <p className='about'>Future President of the Internet</p>
      <ul className='profile-social-media-icons'>
        <li>
          <FaInstagram className='social-media-icon inst' />
        </li>
        <li>
          <FaTwitter className='social-media-icon twitter' />
        </li>
        <li>
          <FaYoutube className='social-media-icon youtube' />
        </li>
        <li>
          <FaTelegramPlane className='social-media-icon telegram' />
        </li>
      </ul>
      <div className='buttons'>
        <div className='button'>
          <span className='button-text'>Message</span>
        </div>
        <div className='button'>
          <span className='button-text'>Following</span>
        </div>
      </div>
      <ul className='social-share'>
        <li>
          <FaHeart />
          <span>68.9k</span>
        </li>
        <div className='divide-line'></div>
        <li>
          <FaComment />
          <span>13.3k</span>
        </li>
        <div className='divide-line'></div>
        <li>
          <IoArrowRedo />
          <span>22.8k</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;
