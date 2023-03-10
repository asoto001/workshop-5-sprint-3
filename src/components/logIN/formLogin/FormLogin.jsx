import React from "react";
import person from '../../assets/icons/person.svg'
import candado from '../../assets/icons/candado.svg'
import './style.scss'

const FormLogin = () => {

   

    return (
        <>
            <form className="form-login">
                <div className="form-login__user">
                    <img src={person} alt="people" />
                    <input
                     type="text" 
                     placeholder="Usuario" 
                     name="username"/>
                </div>
                <div className="form-login__pasword">
                    <img src={candado} alt="candado" />
                    <input
                     type="text" 
                     placeholder="Contraseña"
                     name="pasword" />
                </div>
                <div className="form-login__btn-container">
                    <button className="form-login__btn" type="submit">Iniciar seción</button>
                </div>
            </form>
        </>
    )
}

export default FormLogin