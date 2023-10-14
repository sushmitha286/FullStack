import React, { useState } from 'react';
import DataFetching from './DataFetching';
import DataFilter from './DataFilter';
import DataSort from './DataSort';
import Pagination from './Pagination';

function DataList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const itemsPerPage = 10;

  const onDataFetched = (fetchedData) => {
    setData(fetchedData);
    setError(null);
  };

  const onError = (errMsg) => {
    setError(errMsg);
  };

  const handleRetry = () => {
    DataFetching({ onDataFetched, onError });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  let filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy === 'title') {
    filteredData.sort((a, b) =>
      sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
  }

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container'>
      {error ? (
        <div>
          <p>{error}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      ) : (
        <>
          <DataFetching onDataFetched={onDataFetched} onError={onError} />
          <DataFilter search={search} onSearchChange={setSearch} />
          <DataSort
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSortByChange={setSortBy}
            onSortOrderChange={setSortOrder}
          />
          {currentItems.map((item) => (
            <div key={item.id} className='cardStyle'>
              <h2>{item.title}</h2>
              <button className='buttonStyle'
                onClick={() => {
                  setSelectedItem(item);
                  setShowDetails((prevState) => prevState !== item.id ? item.id : null);
                }}
              >
                {showDetails === item.id ? 'Hide Details' : 'Show Details'}
              </button>
              {showDetails === item.id && (
                <p>{item.body}</p>
              )}
            </div>
          ))}

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredData.length / itemsPerPage)}
            onPageChange={paginate}
          />
        </>
      )}
    </div>
  );
}

export default DataList;
