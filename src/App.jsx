import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDataContext, DataProvider } from "./context/DataContext";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route component={DefaultLayout}>
              <Route path="/" Component={Home} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
