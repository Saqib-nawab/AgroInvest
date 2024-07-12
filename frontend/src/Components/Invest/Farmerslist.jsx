import { useState, useEffect } from 'react';
import Farmercard from './Farmercard';

const Farmerslist = () => {
  const [farmersList, setFarmersList] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/user/getFarmers'; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot retreive Farmers List.');
        }
        return response.json();
      })
      .then((data) => {
        setFarmersList(data);
        //console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className='w-full py-12 columns-2'>
      {farmersList.length > 0 ? (
        farmersList.map((farmer) => {
          if(farmer.crops.length > 0){
            return <Farmercard key={farmer._id} id={farmer._id} fullName={farmer.fullName} location={farmer.location} area={farmer.area} crops={farmer.crops}/>
          }
          else{
            return <></>;
          }
      })
      ) : (
        <p className='text-5xl font-extrabold text-gray-700'>No farmers data available.</p>
      )}
    </div>
  );
};

export default Farmerslist;
