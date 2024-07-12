import React, { useEffect, useState } from 'react'
import Holdingcard from './Holdingcard'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const Holdingslist = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("userId")
    const apiUrl = `http://localhost:3000/investment/getInvestmentsByUserId/${id}`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          toast.error(response.data.message)
        }
        return response.json();
      })
      .then((data) => {
        setResponseData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <div className='w-full h-auto py-12 '>
    <div className='w-full h-auto grid gap-y-8 gap-x-0 grid-cols-3 '>
    {responseData.length>0 ? responseData.map((inv, index) => {
      return (<Holdingcard key={index} crop={inv.harvest.crop} farmer={inv.harvest.farmer.fullName} 
        farmerId={inv.harvest.farmer._id} location={inv.harvest.farmer.location} 
        qty={inv.quantity} amount={inv.amount} investedOn={new Date(inv.investmentDate)}
        expectedOn={new Date(inv.harvest.expectedHarvestDate)}/>)
    })
    :
    <div className='w-full flex justify-center'>
    <h1 className='font-bold text-4xl text-gray-700'>No Current Investments</h1>
    </div>
    }
    </div>
    </div>
  )
}

export default Holdingslist