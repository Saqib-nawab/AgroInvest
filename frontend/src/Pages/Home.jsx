import React, {useEffect, useState} from 'react'
import Hero from '../Components/Home/Hero'
import Invest from '../Components/Home/Invest'
import Portfolio from '../Components/Home/Portfolio'
import Contactform from '../Components/Home/Contactform'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {
  return(
    <div className=''>
      <Hero/>
      <Invest/>
      <Portfolio/>
      <Contactform/>
      <Toaster/>
    </div>
  )
}

export default Home