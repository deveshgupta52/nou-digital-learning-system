import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Registration from './components/Registration'
import './App.css'
import Home from './components/Home'
import Navbar from './Elements/Navbar'
import Topheader from './Elements/Topheader'
import HeroBanner from './Elements/Herobanner'
import ScrollingNotice from './Elements/ScrollingNotice'
import Adminlogin from './components/AdminLogin'
import Dashboard from './Admin/Admin'
import Userlogin from './components/Userlogin'
import HelpDesk from './Elements/Helpdesk'
import Courses from './components/Courses/Courses'



function App() {
  

  return (
    <>
      <div className="container-fluid ">
        <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Adminlogin />} />
          <Route path='/admindash' element={<Dashboard />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Userlogin />} />
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/source' element={<HelpDesk/>}/>
          <Route path='/courses' element={<Courses/>}/>
        </Routes>

        </BrowserRouter>
      </div>

    </>
  )
}

export default App
