import { useEffect, useState } from "react";
import PhoneCard from "../../components/Phones/PhoneCard";
import { Link } from "react-router-dom";
import FavouritesCard from "./FavouritesCard";


const Favourites = () => {
     const [favorites, setFavorites] = useState([]);
     const [notFound, setNotFound] = useState('');
     const [isShow, setIsShow] = useState(false)
     const [totalPrice, setTotalPrice] = useState(0)
     useEffect(() => {
          const favoritesItem = JSON.parse(localStorage.getItem('favorites'));
          if (favoritesItem) {
               setFavorites(favoritesItem);

               const total = favoritesItem.reduce((preValue, currentValue) => preValue + currentValue.price, 0);
               setTotalPrice(total)


          } else {
               setNotFound('No Data Found')
          }
     }, []);
     const handelAllRemove = () => {
          localStorage.clear();
          setFavorites([])
          setNotFound('No Data Found')
     }
     // console.log(isShow)
     return (
          <div>
               {
                    notFound ? <div className="h-[70vh] flex flex-col gap-10 items-center justify-center">
                         <p className=" text-xl font-bold">{notFound}</p>
                         <Link to={'/'}>
                              <button className="text-lg font-medium bg-lime-500 px-4 py-2 rounded-lg">ADD TO CART</button>
                         </Link>
                    </div> : <div>
                         <div className="text-center">
                              <h1 className=" text-xl font-bold mt-10 mb-4"> Favourites Itemes</h1>
                              <h1 className="text-xl font-semibold my-3">Total Price : {parseInt(totalPrice)} $</h1>

                              {favorites.length > 0 && <button onClick={handelAllRemove} className="text-lg font-medium text-center bg-red-400 px-4 py-2 rounded-lg">Delete All Favourites</button>}

                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-20">

                              {
                                   isShow ? favorites.map(phone => <FavouritesCard phone={phone} key={phone.id}></FavouritesCard>) :
                                        favorites.slice(0, 3).map(phone => <FavouritesCard phone={phone} key={phone.id}></FavouritesCard>)
                              }
                         </div>
                         <div className="justify-center flex mb-4">
                              <button onClick={() => setIsShow(!isShow)} className="text-lg font-medium text-center bg-lime-400 px-4 py-2 rounded-lg">{isShow ? 'See Less' : "See More"}</button>
                         </div>
                    </div>
               }

          </div>
     );
};

export default Favourites;