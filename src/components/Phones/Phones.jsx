import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';

const Phones = ({ phonesData }) => {
     // console.log(phonesData)
     return (
          <div className="my-10 max-w-96 lg:max-w-7xl md:max-w-7xl mx-auto">
               <h1 className="text-2xl font-semibold text-center mb-10">All Categories Phones</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                         phonesData?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                    }
               </div>

          </div>
     );
};
Phones.propTypes = {
     phonesData: PropTypes.object
}

export default Phones;