import { NavLink } from "react-router-dom";


const Navbar = () => {
     return (
          <div >
               <nav className="shadow-2xl  py-1 bg-lime-200 ">
                    <ul className="flex lg:justify-between md:justify-around justify-around max-w-6xl mx-auto my-4 ">
                         <div>

                              <a className="text-2xl font-extrabold text-lime-500" href="/">Phone Shop</a>
                         </div>

                         <div className="flex gap-7 font-medium">
                              <li>
                                   <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                             isPending ? "pending" : isActive ? 'underline text-lime-500' : ""
                                        }
                                   >
                                        Home
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/favourites"
                                        className={({ isActive, isPending }) =>
                                             isPending ? "pending" : isActive ? 'underline text-lime-500' : ""
                                        }
                                   >
                                        Favourites
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                             isPending ? "pending" : isActive ? 'underline text-lime-500' : ""
                                        }
                                   >
                                        Login
                                   </NavLink>
                              </li>
                         </div>

                    </ul >
               </nav>
          </div >
     );
};

export default Navbar;