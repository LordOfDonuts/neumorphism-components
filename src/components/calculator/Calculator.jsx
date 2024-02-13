import './Calculator.css';

import React, { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('2+2*2');

  const changeInputValue = (newSymbol) => {
    setInputValue(inputValue + newSymbol);
  };

  const rempveLastInputValue = () => {
    if (inputValue.trim() === '') {
      alert('You must write something');
    }
    const newString = inputValue;
    setInputValue(newString.slice(0, -1));
  };

  const resetInputValue = () => {
    setInputValue('');
  };

  const evaluate = () => {
    if (inputValue.trim() === '') {
      alert('You must write something');
    }

    try {
      setInputValue(eval(inputValue).toString());
    } catch {
      alert('There is an error in your input');
    }
  };

  return (
    <div className='calculator'>
      <form action='#' onSubmit={evaluate}>
        <div className='result'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className='buttons'>
          <div className='row'>
            <input
              type='button'
              value='7'
              onClick={() => changeInputValue('7')}
            />
            <input
              type='button'
              value='8'
              onClick={() => changeInputValue('8')}
            />
            <input
              type='button'
              value='9'
              onClick={() => changeInputValue('9')}
            />
            <input
              type='button'
              value='+'
              onClick={() => changeInputValue('+')}
            />
          </div>
          <div className='row'>
            <input
              type='button'
              value='4'
              onClick={() => changeInputValue('4')}
            />
            <input
              type='button'
              value='5'
              onClick={() => changeInputValue('5')}
            />
            <input
              type='button'
              value='6'
              onClick={() => changeInputValue('6')}
            />
            <input
              type='button'
              value='-'
              onClick={() => changeInputValue('-')}
            />
          </div>
          <div className='row'>
            <input
              type='button'
              value='1'
              onClick={() => changeInputValue('1')}
            />
            <input
              type='button'
              value='2'
              onClick={() => changeInputValue('2')}
            />
            <input
              type='button'
              value='3'
              onClick={() => changeInputValue('3')}
            />
            <input
              type='button'
              value='*'
              onClick={() => changeInputValue('*')}
            />
          </div>
          <div className='row'>
            <input
              type='button'
              value='0'
              onClick={() => changeInputValue('0')}
            />
            <input
              type='button'
              value='.'
              onClick={() => changeInputValue('.')}
            />
            <input
              type='button'
              value='/'
              onClick={() => changeInputValue('/')}
            />

            <input type='button' value='C' onClick={resetInputValue} />
          </div>
          <div className='row'>
            <input
              type='button'
              value='('
              onClick={() => changeInputValue('(')}
            />
            <input
              type='button'
              value=')'
              onClick={() => changeInputValue(')')}
            />
            <input type='button' value='←' onClick={rempveLastInputValue} />
            <input type='button' value='=' onClick={evaluate} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
