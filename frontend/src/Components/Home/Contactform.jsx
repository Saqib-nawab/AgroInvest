import React from 'react'
import Form from './Form';

const Contactform = () => {
  return (
    <div className="w-full py-16 px-4 text-white" id="contact">
        <div className='max-w-[1240px] mx-auto mb-10'>
            <h1 className='font-bold text-4xl'>How Can We Help You?</h1>
        </div>
        <div className='max-w-[1240px] mx-auto'>
          <h1 className='text-2xl font-bold mb-3'>Government Supported Portals-</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6'>

            <a href="https://pmfby.gov.in/">
            <div className='border-solid border-gray-50 h-60 w-60px bg-gray-700 rounded-lg p-5 shadow-2xl hover:bg-gray-600'>
              <h1 className='mb-2'>Pradhan Mantri Fasal Bima Yojana</h1>
              <p className='text-green-500'>Launched in 2016, the Pradhan Mantri Fasal Bima Yojana (PMFBY) is an Indian government crop insurance scheme. It shields farmers from natural disasters, pests, and diseases, with affordable premiums and government subsidies. This program bolsters agricultural sustainability and food security.</p>
            </div>
            </a>


            <a href="https://pmksy.gov.in/">
            <div className='border-solid border-gray-50 h-60 w-60px bg-gray-700 rounded-lg p-5 shadow-2xl hover:bg-gray-600'>
              <h1 className='mb-2'>Pradhan Mantri Krishi Sinchai Yojana</h1>
              <p className='text-green-500'>Launched in 2015, the Pradhan Mantri Krishi Sinchai Yojana (PMKSY) is an Indian government initiative to improve irrigation efficiency, water management, and crop yields through water resource development and micro-irrigation systems while conserving water resources.</p>
            </div>
            </a>

            <a href="https://www.rbi.org.in/commonman/English/Scripts/Notification.aspx?Id=2311">
            <div className='border-solid border-gray-50 h-60 w-60px bg-gray-700 rounded-lg p-5 shadow-2xl hover:bg-gray-600'>
              <h1 className='mb-2'>Kisan Credit Card</h1>
              <p className='text-green-500'> The Kisan Credit Card (KCC) scheme was introduced in 1998 for issue of Kisan Credit Cards to farmers on the basis of their holdings for uniform adoption by the banks so that farmers may use them to readily purchase agriculture inputs such as seeds, fertilizers, pesticides etc.</p>
            </div>
            </a>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto mt-10 flex py-6 md:flex-cols-2 gap-6'>
            <div className='w-1/3'>
                <h1 className='font-bold text-xl'>Points Of Contact</h1>
                <div className='py-3 mt-5'>
                <h1 className='font-bold text-l'>Support</h1>
                <h1 className='text-green-500 text-s hover:underline'>
                    <a href="mailto:agroinvest101@gmail.com">agroinvest101@gmail.com</a>
                </h1>
                </div>
                <div className='py-3'>
                <h1 className='font-bold text-l'>AgroInvest India</h1>
                <h1 className='text-gray-500 text-s italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit, Mumbai, Maharashtra.</h1>
                </div>
                <div className='py-3'>
                <h1 className='font-bold text-l'>Verification of Employment</h1>
                <h1 className='text-gray-400 text-s'>Want to enquire about job opportunities @AgroInvest? mail here -</h1>
                <h1 className='text-green-500 text-s hover:underline'>
                    <a href="mailto:agroinvest101@gmail.com">agroinvest101@gmail.com</a>
                </h1>
                </div>
            </div>
            <div className='w-2/3 mr-0'>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Contactform