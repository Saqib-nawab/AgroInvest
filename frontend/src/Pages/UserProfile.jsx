import React, {useState, useEffect} from 'react'
import axios from 'axios'

const UserProfile = () => {
  const id = localStorage.getItem("userId")
  const [records, setRecords] = useState([])
  useEffect(()=>{
       axios.get(`http://localhost:3000/user/getUserById/${id}`)
       .then(res=> setRecords(res.data))
       .catch(error=>console.log(error));
  }, [id])
  return (
    <div className='py-[25px] px-4 mx-auto max-w-screen-xl text-gray-50'>
      <div className='flex flex-col items-center'>
       <div className='bg-gray-700 p-4 py-12 flex items-center flex-col rounded-xl w-2/3'>
        <div className='mb-5'>
          {records.image==null? (<img className='w-[200px] h-[200px] rounded-lg' src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg" alt="" />)
          : (<img className='w-20 h-20 rounded-lg' src={records.image} alt="" />)  
        }
          
        </div>
        <div>
          <h1 className='text-4xl font-bold mb-7'>{records.fullName}</h1>
        </div>
        <div>
          <h1 className='mb-2 text-xl'>Email: <span>{records.email}</span></h1> 
          <h1 className='mb-2 text-xl'>Phone: <span>+91 </span><span>{records.phone}</span></h1>         
        </div>
        <div class="mt-6 flex justify-end w-full mr-[200px]">
      <a href="/editprofile">
       <button type="" class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Edit Profile</button>
      </a>
      </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile