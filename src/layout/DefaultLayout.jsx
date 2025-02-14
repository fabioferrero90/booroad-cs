import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";

const headerMenu = [
   { route: "/", name: "Home", key: "home" },
   { route: "/travels", name: "Viaggi", key: "travels" },
   { route: "/customers", name: "Anagrafiche Clienti", key: "customers" },
];

const adminHeaderMenu = [
   { route: "/users", name: "Anagrafiche Accompagnatori", key: "users" }
]

function DefaultLayout() {
   return (
      <>
         <Header headerMenu={headerMenu} adminHeaderMenu={adminHeaderMenu}/>
         <main>
            <Outlet />
         </main>
      </>
   )
};

export default DefaultLayout;