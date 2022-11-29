import React from 'react'
import './header.scss'
const Header = (props) => {
  return (
    <div className='logo'>
    <img src={props.logoImg} alt={props.alt}/>
    </div>
  )
}

export default Header
