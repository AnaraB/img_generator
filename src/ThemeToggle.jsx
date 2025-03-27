// import React, { useEffect } from "react"
import { useGlobalContext } from "./context"
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const  ThemeToggle = ()=> {

 // When the button is clicked, invoke 'toggleDarkTheme'
 const { isDarkTheme, toggleDarkTheme } = useGlobalContext()


  return (
  <section className="'toggle-container">
    <button className="dark-toggle" onClick={toggleDarkTheme}>
      { isDarkTheme ? (
       <BsFillMoonFill className="toggle-icon"/>
      ) : (
       <BsFillSunFill className="toggle-icon"/>
      )} 
    </button>
  </section>
  )
  
}

export default ThemeToggle