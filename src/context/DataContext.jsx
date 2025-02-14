import { useState, useContext, createContext } from 'react';
const DataContext = createContext();
import db from '../data/db.json';

const DataProvider = ({ children }) => {

  const [isAdmin, setIsAdmin] = useState(false);

  const data = JSON.parse(JSON.stringify(db));
  return (
    <DataContext.Provider value={{ data, isAdmin, setIsAdmin }}>
      {children}
    </DataContext.Provider>
  )
};

const useDataContext = () => useContext(DataContext);
export { useDataContext, DataProvider };