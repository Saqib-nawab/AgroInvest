import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Signin = () => {
    const otpflag = "Verify your email address by entering the OTP sent to your email"
    const [values, setValues] = useState({
        email:"",
        password:"",
    });
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
          const response = await axios.post("http://localhost:3000/user/login", {
            ...values,
          }
          );
          //console.log(response);
          localStorage.setItem("accessToken",response.data.accessToken)
          localStorage.setItem("userId",response.data._id)
          localStorage.setItem("email",response.data.email)
          localStorage.setItem("userType",response.data.userType)
          toast.success("Login successful! Redirecting to Homescreen")
          navigate("/");

        }catch (error){
            console.log(error);
            toast.error(error.response.data.message)
            if(error.response.data.message == otpflag){
                const id = error.response.data.userId;
                navigate("/verification", {state: {key : id}});
            }
            //console.log(error);
        }
    }
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="src/assets/icon.png" alt="logo"/>
          AgroInvest   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={(e)=>handleSubmit(e)} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>setValues({...values, [e.target.name]:e.target.value})}/>
                  </div>
                  <div class="text-end">
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Dont have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
                  <Toaster/>
              </form>
          </div>
      </div>
      
  </div>
  
</section>
  )
}

export default Signin