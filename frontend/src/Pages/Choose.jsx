import React, {useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';
import axios from 'axios';

const Choose = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const iid = localStorage.getItem("userId")
    const [responseData, setResponseData] = useState([]);
    const [count, setCount] = useState(1)
    const [cost, setCost] = useState(0);
    const [qty,setQty] = useState(0);
    const [price, setPrice] = useState(count*cost)
      const buyNow = async () => {
        try {
          const payload = {
            investorId: iid,
            harvestId: id,
            qty: count,
          };
    
          // Replace the API endpoint below with your actual endpoint for buying
          const buyApiUrl = 'http://localhost:3000/investment/newInvestment'; // Example URL
          const buyResponse = await axios.post(buyApiUrl, payload);
    
          if (buyResponse.status === 200) {
            toast.success('Purchase successful!');
            navigate('/holdings');
          } else {
            toast.error("Purchase failed")
            throw new Error('Purchase failed')
          }
        } catch (error) {
          console.error('Error:', error);
          toast.error('Error making the purchase.');
        }
      };
      const addToCart = async() =>{
        try{
          const payload = {
            investorId: iid,
            harvestId: id,
            qty: count,
          };
          const addToCartApiUrl = 'http://localhost:3000/user/addToCart';
          const addToCartResponse = await axios.post(addToCartApiUrl, payload);
          if (addToCartResponse.status === 200) {
            toast.success("Item Added To Cart!");
          } else {
            toast.error("Purchase failed")
            throw new Error('Purchase failed')
          } 
        }catch(error) {
          console.error('Error:', error);
          toast.error('Error making the purchase.');
        }
      }
      useEffect(() => {
        const apiUrl = `http://localhost:3000/harvest/getHarvestById/${id}`; 
    
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error('No Harvest Found');
            }
            return response.json();
          })
          .then((data) => {
            setResponseData(data);
            setQty(data.quantity)
            setCost(data.amountPerKg)
            setPrice((data.amountPerKg*count).toFixed(2))
            //console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, [id,count]);

  return (
    <div>
        <div className="py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50 h-screen">
    <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Select Quantity</h1>
        <div className="flex flex-col md:flex-row gap-4">
                <div className="bg-gray-700 rounded-lg shadow-md p-6 mb-4 w-full">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">Price</th>
                                <th className="text-left font-semibold">Quantity Available (Kgs)</th>
                                <th className="text-left font-semibold">Select Quantity (Kgs)</th>
                                <th className="text-left font-semibold">Total (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <span className="font-semibold">{responseData.crop}</span>
                                    </div>
                                </td>
                                <td className="py-4">{cost}</td>
                                <td className="py-4">{qty}</td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <button className="border rounded-md py-2 px-4 mr-2 hover:bg-gray-500" onClick={() => {
					                        const newCount = count-1<1 ? count : count -1;
                                            setCount(newCount)
                                            setPrice((newCount*cost).toFixed(2));
                                        }}>-</button>
                                        <span className="text-center w-8">{count}</span>
                                        <button className="border rounded-md py-2 px-4 ml-2 hover:bg-gray-500" onClick={() => {
                                            const newCount = count+1>qty ? count : count+1;
                                            setCount(newCount)
                                            setPrice((newCount*cost).toFixed(2))
                                        }}>+</button>
                                    </div>
                                </td>
                                <td className="py-4">{price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
            <button  onClick={buyNow} className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700'>Buy Now</button>     
            <button  onClick={addToCart} className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-green-700 ml-2'>Add to cart</button>     
            <Toaster />
    </div>
</div>
    </div>
  )
}

export default Choose