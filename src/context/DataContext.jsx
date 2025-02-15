import { useState, useContext, createContext } from 'react';
const DataContext = createContext();
import db from '../data/db.json';

const DataProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const data = JSON.parse(JSON.stringify(db));
  return (
    <DataContext.Provider value={{ data, isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn }}>
      {children}
    </DataContext.Provider>
  )
};

const useDataContext = () => useContext(DataContext);
export { useDataContext, DataProvider };