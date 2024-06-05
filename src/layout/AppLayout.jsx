import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import NavBar from '../components/navbar/NavBar'

export default function AppLayout() {
  return (
    <div>
      <NavBar/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
