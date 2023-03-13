import React, { useEffect, useState } from "react";
import './style.scss'
import pizza from '../assets/icons/STAR-DUST.svg'
import { getUser } from "../../services/login";

const HomePage = () => {

  const [user, setUser] = useState()

  // useEffect(() => {
  //   const userData = getUser()
  //   if (userData) {
  //     setUser(userData)
      
  //   }
  // }, [])
  console.log(user)
  return (
    <>
      <section className="home">
        <section className="home__navbar">
          <div>
            <h2>Home</h2>
            <p>¡Que bueno verte de nuevo nn</p>

            <div>
              <img src="" alt="" />
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default HomePage