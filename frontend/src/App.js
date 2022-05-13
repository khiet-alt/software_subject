import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login';
import MainHome from './pages/Home/MainHome'
import Register from './pages/Register';
import Header from './components/Header';
import './App.css'

import BillForm from './pages/BillForm/BillForm'
import GuestRentRoom from './pages/GuestRentRoom/GuestRentRoom'
import RoomCategory from './pages/RoomCategory/RoomCategory'
import RoomInfor from './pages/RoomInfor/RoomInfor'
import ReportForm from './pages/ReportForm/ReportForm'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/pages/billform' element={<BillForm />} />
            <Route path='/pages/guestrentroom' element={<GuestRentRoom />} />
            <Route path='/pages/roomcategory' element={<RoomCategory />} />
            <Route path='/pages/roominfor' element={<RoomInfor />} />
            <Route path='/pages/reportform' element={<ReportForm />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
