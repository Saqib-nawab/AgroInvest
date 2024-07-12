import { Route, Routes, Navigate } from 'react-router-dom'

import Layout from './Layout'
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Holdings from './Pages/Holdings';
import Farmers from './Pages/Farmers';
import UserProfile from './Pages/UserProfile';
import FarmerProfile from './Pages/FarmerProfile';
import BuyingPage from './Pages/BuyingPage';
import Choose from './Pages/Choose';
import OtpVerification from './Pages/OtpVerification';
import Farmersignup from './Pages/FarmerSignup';
import EditProfile from './Pages/EditProfile';
import FarmerForm from './Pages/FarmerForm';
import SearchHarvest from './Pages/SearchHarvest';
import FarmerHome from './Pages/FarmerHome';

const isAuthenticated = () => {
  const accessToken = localStorage.getItem('accessToken');
  return !!accessToken; // Returns true if there is an access token, false otherwise
};

// PrivateRoute component to handle protected routes
const InvestorRoute = ({ component: Component }) => {
  if (isAuthenticated()) {
    const type = localStorage.getItem("userType");
    if(type == "farmer"){
      return <Navigate to="/home" />
    }
    return <Component />;
  } else {
    // Redirect to the sign-in page if not authenticated
    return <Navigate to="/signin" />;
  }
};

const FarmerRoute = ({ component: Component }) => {
  if (isAuthenticated()) {
    const type = localStorage.getItem("userType");
    if(type == "investor"){
      return <Navigate to="/" />
    }
    return <Component />;
  } else {
    // Redirect to the sign-in page if not authenticated
    return <Navigate to="/signin" />;
  }
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Use PrivateRoute to protect the specified routes */}
        <Route index element={<InvestorRoute component={Home} />} />
        <Route path="/holdings" element={<InvestorRoute component={Holdings} />} />
        <Route path="/farmers" element={<InvestorRoute component={Farmers} />} />
        <Route path="/profile/:id" element={<InvestorRoute component={UserProfile} />} />
        <Route path="/farmerprofile/:id" element={<InvestorRoute component={FarmerProfile} />} />
        <Route path="/checkout" element={<InvestorRoute component={BuyingPage} />} />
        <Route path="/select/:id" element={<InvestorRoute component={Choose} />} />
        <Route path="/searcharvest" element={<InvestorRoute component={SearchHarvest} />} />
        <Route path='/editprofile' element={<EditProfile/>}/>
      </Route>
      <Route path='/farmerform' element={<FarmerRoute component={FarmerForm} />}/>
      <Route path='/home' element={<FarmerRoute component={FarmerHome} />}/>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/farmersignup" element={<Farmersignup />} />
      <Route path="/verification" element={<OtpVerification />} />
    </Routes>
  );
}

export default App