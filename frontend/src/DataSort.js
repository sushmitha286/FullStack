import React from 'react';

function DataSort({ sortBy, sortOrder, onSortByChange, onSortOrderChange }) {
  return (
    <div className="data-sort">
      <label>
        Sort by:
        <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
          <option value="title">Title</option>
          {/* Add more options for other fields to sort by */}
        </select>
      </label>
      <label>
        Sort order:
        <select value={sortOrder} onChange={(e) => onSortOrderChange(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
}

export default DataSort;

