import React from 'react';

function DataFilter({ search, onSearchChange }) {
  return (
    <div className='data-filter'>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default DataFilter;
