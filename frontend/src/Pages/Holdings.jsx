import React from 'react'
import Holdingslist from '../Components/Holdings/Holdingslist'

const Holdings = () => {
  return (
    <div className='text-gray-200'>
        <div className='max-w-[1240px] mt-[15px] w-full h-screen mx-auto text-center flex justify-center'>
           <Holdingslist/>
        </div>
    </div>
  )
}

export default Holdings