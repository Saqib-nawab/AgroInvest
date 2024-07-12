import React from 'react'

const Portfolio = () => {
  return (
    <div className="w-full bg-white py-16 px-4 rounded-md" id="holds" >
        <div className='max-w-[1240px] mx-auto  md:grid-cols-2 flex'>
        <div className='py-[100px] w-[720px]'>
            <p className='mb-3 font-bold text-2xl'>YOUR INVESTMENTS</p>
            <p>Manage Your Investments: Keep track of your agricultural investments with ease. Click the button below to access your personalized dashboard, where you can view details of your current investments, track their progress, and explore opportunities to grow your portfolio. We believe in transparency and empowerment, and our dashboard is designed to provide you with all the information you need to make informed decisions about your investments.</p>
            <a href="/holdings" >
            <button  className='text-white bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Veiw My Portfolio</button>     
            </a>
        </div>
        <img className='w-[400px] h-[400px]'src='src/assets/laptop.png' alt="veg"/>
       
        </div>
    </div>
  )
}

export default Portfolio

{/* <div className=''>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'></div>
        <img src="" alt="veg" /> 
        <div>
            <p>INVESTING DASHBOARD</p>
            <h1>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, neque ipsa saepe culpa ex aperiam.</p>
        </div>
    </div> */}