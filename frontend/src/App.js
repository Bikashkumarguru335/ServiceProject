import './App.css';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './Component/Home/home';
// import RecentService from './Component/Navbar/recentService';
import Parlour from './Component/Parler/parlour';
// import Login from './Component/login/login';
import MassageWomen from './Component/masageWomen/massageWomen';
import BathroomKitchen from './Component/Bathroom&Kitchen/Bathroom&Kitchen';
import ACService from './Component/AcRepair/AcRepair';
import ElectricianService from './Component/Electrical/Elecrical';
import MassageForMen from './Component/massageMen/massageMen';
import Cart from './Component/cart/Cart';
import MyBookings from './Component/Booking/Booking';
import Map from './Component/map';
import OTPLogin from './Component/Firebase/verify';
import SendIMg from './Component/sendImg.js/sendIMg';
import BathroomKItchenAdmin from './Component/Admin/BathroomKItchenAdmin';
import AdminLogin from './Component/login/AdminLogin';
import Electrician from './Component/Admin/Electrician';
import DetailsForm from './Component/Admin/AdminTest';
import BathroomKitchenClean from './Component/Cleaning/bathroom&Kitchen';
import Cook from './Component/Cook/cook';
import LockRepair from './Component/LockRepair/lockRepair';
import WaterPurifier from './Component/WaterPurifier/waterPurifier';
import Experiment from './Component/About/experiment';
import Result from './Component/About/result';
import Note from './Component/About/note';
import Native from './Component/native/Native';
import Payment from './Component/payment/payment';
function App() {


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experiment' element={<Experiment />} />
        <Route path='/payment' element={<Payment />} />
        <Route path="/note" element={<Note />} />
        <Route path='/native' element={<Native />} />
        {/* <Route path='/recent' element={<RecentService />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/map' element={<Map />} />
        <Route path='/parlour' element={<Parlour />} />
        <Route path='/massageWomen' element={<MassageWomen />} />
        <Route path='/bathroom&kitchen' element={<BathroomKitchen />} />
        <Route path='/ac-repair' element={<ACService />} />
        <Route path='/electrician' element={<ElectricianService />} />
        <Route path='/massageMen' element={<MassageForMen />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/booking' element={<MyBookings />} />
        <Route path='/verify' element={<OTPLogin />} />
        <Route path='/img' element={<SendIMg />} />
        <Route path='/bathroomKitchenClean' element={<BathroomKitchenClean />} />
        <Route path="/cook" element={<Cook />} />
        <Route path="/lock" element={<LockRepair />} />
        <Route path="/waterPurifier" element={<WaterPurifier />} />
        <Route path='/bathroomKitchenAdmin' element={<BathroomKItchenAdmin />} />
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/AdminElectrician' element={<Electrician />} />
        <Route path='/AdminTest' element={<DetailsForm />} />
      </Routes>
    </div>
  );
}

export default App;
