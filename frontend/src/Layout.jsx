import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

function Layout() {
  return (
    <div className="">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout