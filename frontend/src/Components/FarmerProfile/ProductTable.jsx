//import React from 'react'

const ProductTable = () => {
  return (
    <div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity Available (kgs)
                </th>
                <th scope="col" className="px-6 py-3">
                    Price (₹/kg)
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Rice
                </th>
                <td className="px-6 py-4">
                    20
                </td>
                <td className="px-6 py-4">
                    1000
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="/select" className="font-medium text-green-500 hover:underline">Buy</a>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Wheat
                </th>
                <td className="px-6 py-4">
                    20
                </td>
                <td className="px-6 py-4">
                    1999
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="/select" className="font-medium text-green-500 hover:underline">Buy</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sugarcane
                </th>
                <td className="px-6 py-4">
                    20
                </td>
                <td className="px-6 py-4">
                    99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="/select" className="font-medium text-green-500 hover:underline">Buy</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProductTable