import React, { useEffect, useState } from "react";
import './style.scss'
import NavBar from "./navBar/NavBar";
import PizzasList from "./pizzasList/PizzasList";

const HomePage = () => {

  const [user, setUser] = useState()

  // const clean = () => {
  //   localStorage.clear()
  // }

  return (
    <>
      <NavBar/>
      <PizzasList/>
    </>
  )
}

export default HomePage