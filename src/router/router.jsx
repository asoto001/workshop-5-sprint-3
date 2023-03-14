import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../components/logIN/LogIn";
import Error404 from "../components/error404/Error404";
import HomePage from "../components/homePage/homePage";
import PaySec from "../components/paySec/PaySec";
import SucessPay from "../components/sucessPay/SucessPay";
import { getPizzas } from "../services/dataPizza";
import { getUser } from "../services/login";

export const AppContext = createContext();

const Router = () => {

  const [userLoged, setUserLoged] = useState({})
  const [pizzasArrayList , setPizzasArrayList] = useState([])

  const obtainedPizzas = async () => {
    const products = await getPizzas();
    setPizzasArrayList(products);
  }

  const getSavedJsonUser = () => {
    setUserLoged(getUser());
  }

  useEffect(() => {
    getSavedJsonUser();
    obtainedPizzas();
  }, [])

  return (
    <AppContext.Provider
      value={{
        userLoged,
        setUserLoged,
        getSavedJsonUser,
        pizzasArrayList,
        obtainedPizzas
      }}
    >


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />}> </Route>
          <Route path='/home' element={<HomePage />} />
          <Route path='/paysec' element={<PaySec />} />
          <Route path='/SucessPay' element={<SucessPay />} />
          <Route path="*" element={<p>Error 404 Not found</p>} />
        </Routes>

      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router