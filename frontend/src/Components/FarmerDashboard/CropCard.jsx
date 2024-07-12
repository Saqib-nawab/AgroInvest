import React from 'react'

const CropCard = ({crop,date,qty,total,stage}) => {
  return (
    <div className="w-full h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
                  <div className="p-4">
                <div className='flex items-start'>
               <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">Crop: <span>{crop}</span></h5>
               </div>
                 <div className='text-start'>
                <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Harvest Date: <span className='text-green-500'>{(new Date(date)).toLocaleDateString('en-GB')}</span></p>
                <p className='mb-2 text-gray-400'>Quantity (kgs): <span className='text-gray-500'>{qty}</span></p>
                <p className='mb-2 text-gray-400'>Demanded Return (₹): <span className='text-gray-500'>{total}</span></p>
                <p className='mb-2 text-gray-400'>Status: {stage==="Completed"? <span className='text-green-500'>Completed</span>: 
                                                            stage==="Pending"? <span className='text-red-500'>Pending</span>:
                                                            <span className='text-yellow-500'>In-Process</span>}</p>
                </div>
                </div>
    </div>
  )
}

export default CropCard