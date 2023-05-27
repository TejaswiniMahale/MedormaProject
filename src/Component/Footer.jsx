import React from 'react'
import logo from "../Assets/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img src={logo} alt=''/>
        <p>© 2020 VAJRA, All Rights Reserved</p>
      </div>
      <div>
        <p>Terms & conditions | FAQ’s</p>
      </div>
    </div>
  )
}

export default Footer