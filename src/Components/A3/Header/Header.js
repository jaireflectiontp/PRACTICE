import React from 'react'
import Left_header from './Left_Header/Left_header'
import Rigtht_header from './Right_header/Rigtht_header'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
     <Left_header/>
     <Rigtht_header/>
    </div>
  )
}

export default Header
