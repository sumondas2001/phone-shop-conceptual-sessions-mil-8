
const Login = () => {
     return (
          <div>
               <div className=" min-h-screen  items-center justify-center flex ">
                    <div className=" flex-col lg:flex-row-reverse p-10 bg-lime-300 rounded-xl">
                         <div className="text-center  lg:text-left mt-10 mb-10 ">
                              <h1 className="text-4xl font-bold">Login now!</h1>

                         </div>
                         <div className="card shrink-0 w-full max-w-sm ">
                              <form className="card-body">
                                   <div className="form-control my-4 ">
                                        <label className="label mr-4">
                                             <span className="label-text text-xl font-semibold">Email :</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered px-3 " required />
                                   </div>
                                   <div className="form-control my-4">
                                        <label className="label">
                                             <span className="label-text text-lg font-semibold">Password : </span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered px-3" required />

                                   </div>
                                   <div className=" my-6 text-center">
                                        <button className="bg-teal-400  w-full py-1 rounded-lg text-lg font-medium hover:bg-teal-600">Login</button>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;