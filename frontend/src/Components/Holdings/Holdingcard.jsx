import React from 'react'

const Holdingcard = (props) => {
  return (
    <div className='w-full'>
    <a href="/farmerprofile" className='w-[350px] h-[280px] mx-auto flex flex-row border border-gray-500 rounded-xl md:flex-row hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <div class="p-4">
          <div className='flex items-start'>
            <h5 className="block mb-3 text-3xl font-bold text-gray-900 dark:text-white">{props.crop}</h5>
          </div>
            <div className='text-start'>
            <p class="mb-2  font-normal text-gray-700 dark:text-gray-400">Farmer: <span className='text-green-500'>{props.farmer}</span></p>
            <p className='mb-2 text-gray-400'>Location: <span className='text-gray-500'>{props.location}</span></p>
            <p className='mb-2 text-gray-400'>Quantity: {props.qty}</p>
            <p className='mb-2 text-gray-400'>Amount: <span>₹</span>{props.amount}</p>
            <p className='mb-2 text-gray-400'>Invested on: <span className='italic text-gray-500'>{props.investedOn.toLocaleDateString("en-GB")}</span></p>
            <p className='mb-2 text-gray-400'>Estimated date: <span className='italic text-gray-500'>{props.expectedOn.toLocaleDateString("en-GB")}</span></p>
          </div>
        </div>
    </a>
    </div>
  )
}

export default Holdingcard