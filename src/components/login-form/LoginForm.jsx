import './LoginForm.css';

import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const [fieldOneValue, setFieldOneValue] = useState('');
  const [fieldTwoValue, setFieldTwoValue] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    setFieldOneValue('');
    setFieldTwoValue('');
  }

  return (
    <div className='login-form'>
      <form action='#' onSubmit={(e) => submitForm(e)}>
        <header className='title'>Login Form</header>
        <div className='field'>
          <FaUser className='field-icon' />
          <input
            type='text'
            placeholder='Email or Phone'
            onChange={(e) => setFieldOneValue(e.target.value)}
            value={fieldOneValue}
            required
          />
        </div>
        <div className='field'>
          <FaLock className='field-icon' />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setFieldTwoValue(e.target.value)}
            value={fieldTwoValue}
            required
          />
        </div>
        <div>
          <a href='#notalink' className='forgot-password'>
            Forgot Password?
          </a>
        </div>
        <button className='sign-in-btn'>Sign In</button>
        <div className='sign-up'>
          <p>Not a Member?</p>
          <a href='notalink'>Sign Up Now</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
