import React from 'react'

const Farmercard = (props) => {
  return (
    <div className='w-full h-auto'>
    <a href={`/farmerprofile/${props.id}`} className="w-full h-[200px] mx-auto flex flex-col border mb-4 border-gray-500 rounded-xl md:flex-row bg-gray-800 hover:bg-gray-700">
        <img className="w-[250px] rounded-xl h-[200px] p-1" src="src/assets/agri.jpg" alt=""/>
        <div className="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">{props.fullName}</h5>
          </div>
            <div className='text-start'>
            <p className="mb-2  font-normal text-gray-700 dark:text-gray-400">Produce: <span className='text-green-500'>{props.crops.join(", ")}</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>{props.location}</span></p>
            <p className='mb-2 text-gray-400'>Area of land: <span className='text-gray-500'>{props.area}</span></p>
            </div>
        </div>
    </a>
    </div>
  )
}

export default Farmercard