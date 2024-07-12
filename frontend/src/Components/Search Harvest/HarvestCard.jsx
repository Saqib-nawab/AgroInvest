import React from 'react'
import FarmerProfile from '../../Pages/FarmerProfile';

const HarvestCard = ({id, crop, farmer, date, qty, amount, farmer_id}) => {
  return (
    <div className='w-full h-auto mt-5'>
    <a href={`/select/${id}`} className="w-4/5 h-[300px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <div className="p-4 w-full">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">{crop}</h5>
          </div>
            <div className='w-full text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Farmer Name: <span className='text-green-500'>{farmer}</span></p>
            <p className='mb-2 text-gray-400'>Expected harvest date: <span className='text-gray-500'>{date.toLocaleDateString("en-GB")}</span></p>
            <p className='mb-2 text-gray-400'>Quantity (kgs): <span className='text-gray-500'>{qty}</span></p>
            <p className='mb-2 text-gray-400'>Amount (₹/kg): <span className='text-gray-500'>{amount}</span></p>
            <div className='flex flex-row justify-end w-full'>
            <a href={`/farmerprofile/${farmer_id}`} >
            <button  className='bg-green-500 shadow-4xl w-[150px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>View Farmer</button>     
            </a>
            <a href={`/select/${id}`} >
            <button  className='bg-green-500 shadow-4xl w-[150px] ml-4 rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Buy</button>     
            </a>
            </div>
          </div>
        </div>
    </a>
    </div>
  )
}

export default HarvestCard