import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import About from './pages/About/About'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        < Route path='/' element={<Home />} />
        < Route path='/Cart' element={<Cart />} />
        < Route path='/Order' element={<PlaceOrder />} />
        < Route path='/About' element={<About/>} />
      </Routes>
    </div>
    <Footer />
    </>
    
  )
}

export default App