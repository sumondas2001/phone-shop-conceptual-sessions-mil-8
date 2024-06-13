import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
     const location = useLocation();
     console.log(location.pathname);
     {
          if (location.pathname === '/') {
               document.title = 'Phone-Bazar-Home'
          } else {
               document.title = `Phone-Bazar${location.pathname.replace('/', '-')} `

          }
          if (location.state) {
               document.title = `${location.state}`
          }
     }
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;