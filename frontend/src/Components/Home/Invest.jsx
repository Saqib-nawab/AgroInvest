import React from 'react'
const Invest = () => {
  return (
    
    <div className="w-full py-16 px-4 text-white" id="invest">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] h-[400px]'src='src/assets/organic.png' alt="veg"/>
        <div className='py-[85px]'>
            <p className='mb-3 font-bold text-2xl'>INVESTING DASHBOARD</p>
            <p>Explore Our Farmer Network: Discover a diverse community of dedicated farmers ready for your support. By clicking the button below, you can access a list of talented farmers and their inspiring stories. Your investment can make a significant difference in their agricultural endeavors. Join us in nurturing sustainable agriculture and empowering farmers on their journey to success.</p>
            <a href="/farmers" >
            <button  className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Invest</button>     
            </a>
        </div>
        </div>
    </div>
  )
}

export default Invest