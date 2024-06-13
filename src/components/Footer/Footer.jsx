import { Link } from "react-router-dom";


const Footer = () => {
     return (
          <div>
               <footer className="footer footer-center p-4  bg-base-300 text-base-content rounded mt-10">
                    <nav className="grid grid-flow-col gap-4">
                         <Link to={'/'}><a className="link link-hover">Home</a></Link>
                         <Link to={'/favourites'}><a className="link link-hover">Favourites</a></Link>
                         <Link to={'/login'}><a className="link link-hover">Login</a></Link>

                    </nav>
                    <nav>
                         <div>
                              <h1 className="text-2xl font-bold">PHONE BAZAR</h1>
                         </div>
                    </nav>
                    <aside>
                         <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
                    </aside>
               </footer>
          </div>
     );
};

export default Footer;