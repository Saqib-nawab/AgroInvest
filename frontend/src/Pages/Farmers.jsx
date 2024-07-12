import React from 'react'
import Farmerslist from '../Components/Invest/Farmerslist'

const Farmers = () => {
  return (
    <div className='text-gray-200'>
        <div className='max-w-[1240px] mt-[15px] w-full h-screen mx-auto text-center flex justify-center'>
          <div className='w-full h-auto'>
           <Farmerslist/>
           <div className='flex justify-end'>
           <a href="/searcharvest" >
            <button  className='bg-green-500 shadow-4xl w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Search by Harvest</button>     
          </a>
          </div>
           </div>
        </div>
    </div>
  )
}

export default Farmers