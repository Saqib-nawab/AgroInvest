import React,{useState, useEffect} from 'react'
import HarvestCard from '../Components/Search Harvest/HarvestCard'
import HarvestList from '../Components/Search Harvest/HarvestList'

const SearchHarvest = () => {
  const [search,setSearch] = useState('');
  const [harvests,setHarvests] = useState([]);
  useEffect(() => {
    const apiUrl = `http://localhost:3000/harvest/getAllHarvest`; 

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          toast.error(response.data.message)
        }
        return response.json();
      })
      .then((data) => {
        setHarvests(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [search]);
  return (
    <div className='max-w-[1240px] mt-[15px] w-full h-screen mx-auto text-center flex justify-center text-white'>
      <div className='w-full h-auto flex flex-col'>
       <div className='w-full flex justify-center'> 
        <form className='w-1/2' onSubmit={(e) => e.preventDefault()}>   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            </div>
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search By Crop Name" required/>
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
           </div>
        </form>
       </div>

        <div className='w-full'>
        {harvests.length > 0 ? 
        <HarvestList harvests={harvests.filter(harvest => (harvest.crop.toLowerCase()).includes(search.toLowerCase()))}/> 
        : ""}
        </div>


      </div>
    </div>
  )
}

export default SearchHarvest