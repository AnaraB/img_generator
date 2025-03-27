// import React, { useEffect } from "react"
import { useGlobalContext } from "./context"

const  ThemeToggle = ()=> {
  const { greeting } = useGlobalContext();
  console.log(greeting);

  return <h2> ThemeToggle</h2>
  
}

export default ThemeToggle