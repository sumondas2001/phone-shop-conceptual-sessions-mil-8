import { Link } from "react-router-dom";


const PhoneDetailsCard = ({ phone }) => {
     console.log(phone)
     const { id, brand_name, image, phone_name, price, rating } = phone || {}
     return (
          <div className="">
               <div className="flex justify-center items-center h-[80vh]">
                    <div className="relative flex bg-clip-border rounded-xl bg-gray-300  shadow-md w-full max-w-[48rem] flex-row p-10">
                         <div
                              className="relative w-2/5 m-0 overflow-hidden rounded-r-none bg-clip-border rounded-xl shrink-0">
                              <img
                                   src={image}
                                   alt="card-image" className="object-cover w-full h-full " />
                         </div>
                         <div className="p-6">
                              <h6
                                   className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase">
                                   {brand_name}
                              </h6>
                              <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                   {phone_name}
                              </h4>
                              <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed ">
                                   <span className="text-base font-medium">Price: </span>  {price}
                                   $
                              </p>
                              <div>
                                   <Link>
                                        <button className="font-bold bg-lime-500 px-6 py-3 hover:bg-lime-400">ADD TO FAVOURITES</button>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PhoneDetailsCard;