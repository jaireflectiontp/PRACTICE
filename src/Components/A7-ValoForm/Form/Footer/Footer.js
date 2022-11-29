import React from 'react'
import './footer.scss'
import '../../../../style.css'
const Footer = () => {
  return (
    <div className='footer_section'>
      <div className='signIn_btn'>
        <button><i className='icon-arrow-right2'></i></button>
      </div>
      <div className='signIn_alt'>
        <small>CAN'T SIGN IN</small>
        <small>CREATE ACCOUNT</small>
        <small className='version'>V60.0.10</small>
      </div>
    </div>
  )
}

export default Footer
