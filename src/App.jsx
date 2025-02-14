import { BrowserRouter, Router, Route } from "react-router-dom";
import { useDataContext, DataProvider } from "./context/DataContext";
import DefaultLayout from "./layout/DefaultLayout";

const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Router>
            <Route />
          </Router>
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
