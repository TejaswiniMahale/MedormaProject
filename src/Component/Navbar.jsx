import React from 'react'
import logo from "../Assets/logo.png"
import "./style.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={logo} alt=''/>
            <p>Home</p>
        </div>
        <p>+91 89715 80265</p>
    </div>
  )
}

export default Navbar