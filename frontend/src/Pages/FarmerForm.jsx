import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FarmerForm = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("userId")
  const [formData, setFormData] = useState({
    farmer: id,
    crop: '',
    expectedHarvestDate: '',
    quantity: '',
    totalInvestment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const payload = {
        ...formData,
      };

      const addCropUrl = 'http://localhost:3000/user/request';
      const addToCartResponse = await axios.post(addCropUrl, payload);

      if (addToCartResponse.status === 200) {
        toast.success(addToCartResponse.data.message);
        navigate('/home');
      } else {
        toast.error('Failed');
        throw new Error('Purchase failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div class="w-full max-w-2xl mx-auto mt-10 flex items-center h-full">
      <div className="w-full flex align-center h-full">
        <div class="p-6 border border-gray-600 sm:rounded-md bg-gray-800">
          <h1 className="text-gray-50 font-bold text-xl mb-3">Crop Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="border border-gray-600 p-3 mb-4 rounded-xl">
              <div className="flex flex-row gap-x-5">
                <label class="block mb-6">
                  <span class="text-gray-300">Crop Name</span>
                  <input
                    name="crop"
                    type="text"
                    value={formData.crop}
                    onChange={handleInputChange}
                    class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300"
                    placeholder="Crop"
                  />
                </label>
                <label class="block mb-6">
                  <span class="text-gray-300">Date of harvest</span>
                  <input
                    name="expectedHarvestDate"
                    type="date"
                    value={formData.expectedHarvestDate}
                    onChange={handleInputChange}
                    class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300"
                    placeholder="dd/mm/yyyy"
                  />
                </label>
              </div>
              <div className="flex flex-row gap-x-5">
                <label class="mb-6">
                  <span class="text-gray-300">Quantity (kgs)</span>
                  <input
                    name="quantity"
                    type="text"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300"
                    placeholder="Quantity (kgs)"
                  />
                </label>
                <label class="mb-6">
                  <span class="text-gray-300">Demanded Return(₹)</span>
                  <input
                    name="totalInvestment"
                    type="number"
                    value={formData.totalInvestment}
                    onChange={handleInputChange}
                    class="block w-full mt-1 p-2 border-gray-600 bg-gray-700 rounded-md  shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200  focus:ring-opacity-50  placeholder-gray-500  text-gray-300"
                    placeholder="Demanded Return (₹)"
                  />
                </label>
              </div>
            </div>

            <div class="flex justify-end mb-6 gap-4">
              <button
                type="submit"
                class="h-10 px-5 text-white bg-green-500 rounded-lg duration-150 focus:shadow-outlin hover:bg-green-400"
              >
                Submit
              </button>
            </div>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default FarmerForm;
