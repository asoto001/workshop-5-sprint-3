import React from "react";
import './style.scss'
import pizza from '../assets/icons/pizza.svg'
import FormLogin from "./formLogin/FormLogin";

const LogIn = () => {
  return (
    <>
      <section className="logIn">
        <section className="logIn__info-container">
          <div className="logIn__title-logo-container">
            <img src={pizza} alt="pizza" />
            <h2>PiSassScript</h2>
          </div>
          <div className="logIn__title">
            <h3>Inicia sesión en tu cuenta</h3>
            <p>
              Disfruta de la mejor Pizza creada para las personas amantes del codigo
            </p>
          </div>
        </section>
        
        <section>
        <FormLogin/>
        </section>

      </section>
    </>
  )
}

export default LogIn