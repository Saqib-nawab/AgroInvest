import React, {useState, useEffect} from 'react'
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Farmersignup = () => {
    const otpver = "Already Signed Up, Please Verify your Email."
    const [values, setValues] = useState({
        fullName:"",
        phone:"",
        email:"",
        password:"",

    });
    const [isSubscribed, setIsSubscribed] = useState(false);
  const handleChange = (event) => {
    if (!event.target.checked) {
      toast.error("Terms and conditions not agreed");
    }
    setIsSubscribed(current => !current);
  };
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!isSubscribed){
          toast.error("Terms and conditions not agreed")
        }else{
          try{
            const response = await axios.post("http://localhost:3000/user/signupfarmer", {
              ...values,
            }
            );
            const id = response.data.id;
            toast.success("Registration Successfull!")
            navigate("/verification", {state: {key : id}});
          }catch (error){
              toast.error(error.response.data.message);
              if(error.response.data.message == otpver){
                navigate("/signin");
              }
          }
        }
    }
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="/signup" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="src/assets/icon.png" alt="logo"/>
          AgroInvest    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account (Farmer)
              </h1>
              <form onSubmit={(e)=>handleSubmit(e)} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                      <input type="Name" name="fullName" id="Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name" required=""onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div>
                      <label for="Phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No.</label>
                      <input type="Phone" name="phone" id="Phone" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone no." required=""onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" value={isSubscribed} onChange={handleChange} aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" disabled={!isSubscribed} class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/signin" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Are you an Investor? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Apply as a Inverstor</a>
                  </p>
              </form>
              <Toaster/>
          </div>
      </div>
  </div>
</section>
  )
}

export default Farmersignup