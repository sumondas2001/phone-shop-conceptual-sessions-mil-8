import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Phones from "../../components/Phones/Phones";


const Home = () => {
     const phonesData = useLoaderData();
     // console.log(phones)
     return (
          <div>
               <Banner></Banner>
               <Phones phonesData={phonesData}></Phones>
          </div>
     );
};

export default Home;