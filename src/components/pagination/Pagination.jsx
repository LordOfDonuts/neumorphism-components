import './Pagination.css';

import React, { useState } from 'react';

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(4);

  const changePageNumber = (newPage) => {
    if (newPage > 8) newPage = 1;
    else if (newPage < 1) newPage = 8;

    setPageNumber(newPage);
  };

  return (
    <div className='pagination'>
      <ul className='pagination-list'>
        <li>
          <button
            className='navigation-btn'
            onClick={() => changePageNumber(pageNumber - 1)}
          >
            <p>Previous</p>
          </button>
        </li>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <li
              key={item}
              className={`page-number ${pageNumber === item ? 'active' : ''}`}
            >
              <button onClick={() => changePageNumber(item)}>
                <p>{item}</p>
              </button>
            </li>
          );
        })}
        <li>
          <button
            className='navigation-btn'
            onClick={() => changePageNumber(pageNumber + 1)}
          >
            <p>Next</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
