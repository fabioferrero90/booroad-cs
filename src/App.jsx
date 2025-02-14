import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDataContext, DataProvider } from "./context/DataContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
