import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCard from "./PhoneDetailsCard";

const PhoneDetails = () => {
     const [phone, setPhone] = useState()
     const phonesData = useLoaderData()
     const { id } = useParams();
     // 
     // const findPhone = phonesData.find(phone => phone.id === id);
     // console.log(findPhone)

     useEffect(() => {

          const findPhone = phonesData.find(phone => phone.id === id);
          setPhone(findPhone)
     }, [id, phonesData])


     return (
          <div>
               <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
          </div>
     );
};

export default PhoneDetails;