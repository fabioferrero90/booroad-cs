import { Outlet } from "react-router-dom";

function DefaultLayout() {
   
   return (
      <>
         <header>
            HEADER
         </header>
         <main>
            <Outlet />
         </main>
      </>
   )
};

export default DefaultLayout;