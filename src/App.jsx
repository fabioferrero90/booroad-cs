import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDataContext, DataProvider } from "./context/DataContext";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import Travels from "./pages/Travels";
import Customers from "./pages/Customers";
import Users from "./pages/Users";
import CustomerDetails from "./pages/CustomerDetails";
import TravelDetails from "./pages/TravelDetails";

const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={Home} />
              <Route path="/travels" Component={Travels} />
              <Route path="/traveldetails" Component={TravelDetails} />
              <Route path="/customers" Component={Customers} />
              <Route path="/users" Component={Users} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
