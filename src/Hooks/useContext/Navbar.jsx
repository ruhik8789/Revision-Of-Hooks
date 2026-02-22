import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    console.log(useContext(ThemeContext));
  return (
    <div style={{ background: theme === "light" ? "white" : "black" }}>
      <button onClick={() => setTheme(() => theme === "light" ? "dark" : "light")}>Toggle</button>
    </div>
  )
}

export default Navbar