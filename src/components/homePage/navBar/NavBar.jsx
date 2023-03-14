import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../router/Router'
import './style.scss'

const NavBar = () => {
    const { userLoged } = useContext(AppContext);


    return (
        <>
            <section className="navBar">
                <section className="navBar__container">

                    <div>
                        <h2>Home</h2>
                        <p>
                            ¡Que bueno verte de nuevo {" "}
                            <span>
                                {userLoged.hasOwnProperty('user') ? userLoged.user : "MADAFAKER!"}
                            </span>
                        </p>

                    </div>
                    <figure className="navBar__img-container">
                        <img src={userLoged.image} alt="!o shit¡ here we go again" />
                    </figure>

                </section>
            </section>
        </>
    )
}

export default NavBar