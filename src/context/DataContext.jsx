import { useContext, createContext } from 'react';
const DataContext = createContext();
import db from '../data/db.json';

const DataProvider = ({ children }) => {

  const data = JSON.parse(JSON.stringify(db));

  console.log(data.users)
  if (data.user.length === 0){
    console.log('No users found')
  }


  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  )
};

const useDataContext = () => useContext(DataContext);
export { useDataContext, DataProvider };