import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import { useDataContext } from "../context/DataContext.jsx";
import LoginPage from "../pages/LoginPage.jsx";

const headerMenu = [
   { route: "/", name: "Home", key: "home" },
   { route: "/travels", name: "Viaggi", key: "travels" },
   { route: "/customers", name: "Anagrafiche Clienti", key: "customers" },
];

const adminHeaderMenu = [
   { route: "/users", name: "Anagrafiche Accompagnatori", key: "users" }
]

function DefaultLayout() {

   const { isLoggedIn } = useDataContext();

   if (!isLoggedIn) {
      return (
         <LoginPage />
      )
   } else {
      return (
         <>
            <Header headerMenu={headerMenu} adminHeaderMenu={adminHeaderMenu}/>
            <main>
               <Outlet />
            </main>
         </>
      )
   }
};

export default DefaultLayout;