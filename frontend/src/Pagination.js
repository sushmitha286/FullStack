import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <ul className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
          <button onClick={() => onPageChange(index + 1)}>{index + 1}</button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
