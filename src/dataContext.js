import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
