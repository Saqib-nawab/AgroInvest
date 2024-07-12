import React from 'react'


const CartSummary = ({totalAmount,checkout}) => {
    const taxRate = 0.15;
    const ship = totalAmount?100:0;
  return (
    <div class="bg-gray-700 rounded-lg shadow-md p-6">
                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                    <div class="flex justify-between mb-2">
                        <span>Subtotal (₹)</span>
                        <span>{totalAmount}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>{(totalAmount * taxRate).toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>{ship}</span>
                    </div>
                    <hr class="my-2"/>
            <div class="flex justify-between mb-2">
                <span class="font-semibold">Total (₹)</span>
                <span class="font-semibold">{(Number(totalAmount) + Number(ship) + Number((totalAmount * taxRate))).toFixed(2)}</span>
            </div>
        <button onClick={(e) => {checkout();}} class="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
    </div>
  )
}

export default CartSummary