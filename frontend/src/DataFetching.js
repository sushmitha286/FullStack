import { useEffect } from 'react';
import axios from 'axios';

function DataFetching({ onDataFetched, onError }) {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/data')
      .then((response) => {
        onDataFetched(response.data);
      })
      .catch((err) => {
        console.error(err);
        onError('Failed to fetch data from the API: ' + err.message);
      });
  }, [onDataFetched, onError]);

  return null;
}

export default DataFetching;
