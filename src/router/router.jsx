import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../components/logIN/LogIn";
import Error404 from "../components/error404/Error404";
import HomePage from "../components/homePage/homePage";
import PaySec from "../components/paySec/PaySec";
import SucessPay from "../components/sucessPay/SucessPay";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}> </Route>
        <Route path='/home' element={<HomePage />} /> 
        <Route path='/paysec' element={<PaySec />} />
        <Route path='/SucessPay' element={<SucessPay />} />
        <Route path="*" element={<p>Error 404 Not found</p>} />
      </Routes>

    </BrowserRouter>
  )
}

export default Router