import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import LogIn from "../components/logIN/logIn";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router