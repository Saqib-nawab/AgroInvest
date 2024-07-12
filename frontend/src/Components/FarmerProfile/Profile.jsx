import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {
  const [responseData, setResponseData] = useState([]);
const {id} = useParams();
  useEffect(() => {
    const apiUrl = `http://localhost:3000/harvest/getHarvestByFarmerId/${id}`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Cannot retreive Farmers List.');
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]); 
  return (
    <div className='text-white p-4'>
    <div>
       <div className='flex justify-center w-full h-[300px] mb-12'>
        <img src='src/assets/agri.jpg' alt='' className='rounded-xl w-full object-cover'></img>
       </div>
       <div>
        <h1 className='text-5xl font-bold mb-4'>{responseData.fullName}</h1>
        <p className='mb-2 text-gray-200'>Crops Produced: <span className='text-green-500'>Rice, Wheat , Sugarcane</span></p>
        <p className='mb-2 text-gray-200'>Location: <span className='text-gray-400'>{responseData.location}</span></p>
        <p className='mb-2 text-gray-200'>Area of Land: <span className='text-gray-400'>{responseData.area}</span></p>
        <p className='text-gray-200'>Products Available: </p>
       </div>
       <div className='py-5'>
        
       <div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity Available (kgs)
                </th>
                <th scope="col" className="px-6 py-3">
                    Expected Harvest Date (yyyy-mm-dd)
                </th>
                <th scope="col" className="px-6 py-3">
                    Price (₹/kg)
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
                
            </tr>
        </thead>
        <tbody>
          {responseData.harvests?
          responseData.harvests.map((harvest,index) => 
            (<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {harvest.crop}
            </th>
            <td className="px-6 py-4">
                {harvest.quantity}
            </td>
            <td className="px-6 py-4">
                {harvest.expectedHarvestDate.substring(0,10)}
            </td>
            <td className="px-6 py-4">
                {harvest.amountPerKg}
            </td>
            <td className="px-6 py-4 text-right">
            {harvest.soldOut ? (
                      <span className="text-red-500">Sold Out</span>
                    ) : (
                      <a
                        href={`/select/${harvest._id}`}
                        className="font-medium text-green-500 hover:underline"
                      >
                        Buy
                      </a>
                    )}
            </td>
        </tr>)
            )
            : (<div></div>)
        }
          
            
        </tbody>
    </table>
</div>

    </div>

       </div>
    </div>
    </div>
  )
}

export default Profile