import React from 'react'

const Hero = () => {
  return (
    <div className='py-[5px] text-gray-200 bg-[url("src/assets/background.png")] bg-no-repeat bg-cover'>
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green-500 font-bold p-2 text-xl'>Empowering farmers and beyond ,</p>
            <h1 className='md:text-7xl sm:tex-6xl text-4xl font-bold md:py-6'>AgroInvest.</h1>
            <div>
             <p className='md:text-xl sm:text-s text-xl font-bold'>Fast , Flexible Financing for Agricultural Success.</p>
            </div>
            <p className='text-gray-300'>Empowering Farmers through Crowdfunded Investment.</p>
            <a href="#invest" >
            <button  className='bg-green-500 shadow-4xl w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Get Started</button>     
            </a>
        </div>
    </div>
  )
}

export default Hero