import React, { useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import Items from '../Components/Cart/Items'
import CartSummary from '../Components/Cart/CartSummary'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BuyingPage = () => {
  const navigate = useNavigate();
  const product = "Rice"
  const price = 1000
  const quantity = 5
  const taxes = 100;
  const ship = 250;
  const total = price*quantity
  const final = total + taxes + ship
  const [items,setItems] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("userId")
    const apiUrl = `http://localhost:3000/user/getCartItems/${id}`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          toast.error(response?.data?.message)
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const deleteFromCart = async(e,id) => {
    try{
        const response = await axios.delete(`http://localhost:3000/user/removeFromCart/${id}`)
        if(response.status === 200){
            toast.success(response.data.message);
            location.reload();
        }
        toast.error(response.data.message);

    } catch(err){
        console.log(err)
    }
}

  const checkout = async() => {
    try{
      const response = await axios.post('http://localhost:3000/user/checkout',items)
      console.log(response)
      if(response.status === 200){
        toast.success(response.data.message);
        navigate('/holdings')
      }
    } catch(err){
      console.log(err);
      toast.error('Something went wrong')
    }
  }

  const totalAmount = items.reduce((accumulator, item) => {
    const amount = item.quantity * item.harvestId.amountPerKg;
    return accumulator + amount;
  }, 0);

  return (
    <div>
    <div class="py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50">
    <div class="container mx-auto px-4">
        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
                <div class="bg-gray-700 rounded-lg shadow-md p-6 mb-4">
                    <table class="w-full">
                        <thead className='mb-2 border-b-2 border-gray-400'>
                            <tr className='py-5'>
                                <th class="text-left font-semibold">Product</th>
                                <th class="text-left font-semibold">Price</th>
                                <th class="text-left font-semibold">Quantity (kgs)</th>
                                <th class="text-left font-semibold">Total (₹)</th>
                            </tr>
                        </thead>
                        {items?
                        items.map((item) => {
                            return <Items id={item._id} crop={item.harvestId.crop} price={item.harvestId.amountPerKg} 
                            qty={item.quantity} total={Number(item.harvestId.amountPerKg)*Number(item.quantity)} deleteFromCart={deleteFromCart}/>
                        })
                    :
                    ""}
                    </table>
                </div>
            </div>
            <div class="md:w-1/4">
               <CartSummary totalAmount={totalAmount} checkout={checkout}/> 
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default BuyingPage