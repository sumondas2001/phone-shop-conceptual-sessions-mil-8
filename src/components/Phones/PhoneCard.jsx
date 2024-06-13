

const PhoneCard = ({ phone }) => {
     const { id, brand_name, image, phone_name, price, rating } = phone || {}
     console.log(phone)
     return (
          <div>
               <div className="relative flex flex-col text-gray-700 bg-gray-300 my-3 shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 p-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                         <img
                              src={image}
                              alt="card-image" className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                         <p className="block font-sans text-lg antialiased font-bold leading-relaxed text-blue-gray-900">
                              {brand_name}
                         </p>
                         <div className="flex items-center justify-between mb-2">

                              <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-blue-gray-900">
                                   {phone_name}
                              </p>
                              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                   <span>$</span>   {price}
                              </p>
                         </div>
                         <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                              {rating}
                         </p>
                    </div>
                    <div className="p-6 pt-0">
                         <button
                              className="bg-lime-500 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                              type="button">
                              SEE DETAILS
                         </button>
                    </div>
               </div>

          </div>
     );
};

export default PhoneCard;