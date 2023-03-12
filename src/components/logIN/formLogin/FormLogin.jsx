import React, { useEffect, useState } from "react";
import { getUsers } from "../../../services/datatUsers";
import { endpoints } from "../../../services/enpoints";
import person from '../../assets/icons/person.svg'
import candado from '../../assets/icons/candado.svg'
import './style.scss'
import { useForm } from "react-hook-form";
import axios from "axios";
//import { Link } from "react-router-dom";

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onChange" });

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        const getListUsers = async () => {
            const url = endpoints.user;
            const response = await axios.get(url);
            console.log(response.data)
            setUsersList(response)
        }
        getListUsers()
    }, [])

    console.log(usersList)
    let authValidation = false;
    const info = usersList.data;
    console.log(info)

    const onSubmit = (e) => {
        const Password = e.password;
        const Name = e.Usuario;
        console.log(Password)
        console.log(Name)
         if (Name === info[1].user ) {
           console.log('yessssssss madafaka')
           localStorage.setItem('usuario', JSON.stringify(info[1])) 
           validationLogin() 
         }
    }
    //console.log(errors);

    const validationLogin = () => {
        authValidation = true
        console.log(authValidation)
        
     }

    return (
        <>
            <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-login__user">
                    <img src={person} alt="people" />
                    <input
                        type="text"
                        placeholder="Usuario"
                        {...register
                            ("Usuario", { required: true, maxLength: 40 })} />
                </div>
                <div className="form-login__pasword">
                    <img src={candado} alt="candado" />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        {...register("password", { required: true, maxLength: 6 })} />
                </div>
                <div className="form-login__btn-container">
                    <button className="form-login__btn" type="submit">iniciar secion</button>
                </div>
            </form>
        </>
    )
}

export default FormLogin