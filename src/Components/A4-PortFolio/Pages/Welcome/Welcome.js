import React, { useRef } from 'react'
import Profile from '../Home/Profile/Profile'
import './welcome.scss'
import '../../responsive.scss'
const Welcome = () => {

  const enter=()=>{
    window.location.href='/home'
  }
  return (
    <div className='welcome_window'>
     <div className='welcome_box'>
      <Profile/>
     <span className='start_btn' onClick={enter}>Lets get started <i className='icon-angle-double-right'></i></span>
     </div>
    </div>
  )
}

export default Welcome
