import React, { useState } from 'react'
import './nav.scss'
import '../../../../style.css'
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  const [isActive, setActive] = useState("false");
  const menuToggle = () => {
    setActive(!isActive);
  }
  const addActive = (event) => {
    event.currentTarget.classList.add('act');
  }

  const removeActive = (event) => {
    event.currentTarget.classList.remove('act');
  }

  return (
   <>
   <div className={`sidebar ${isActive ? '' : "active"}`}>
        <div className='menu' onClick={menuToggle}></div>
        <ul>
          <li onMouseEnter={addActive} onMouseLeave={removeActive} ><Link to='/home' ><span className='nav_icon'><i className='icon-home3'></i></span><span className='nav_text'>Home</span></Link></li>
          <li onMouseEnter={addActive} onMouseLeave={removeActive} ><Link to='/intro' ><span className='nav_icon'><i className='icon-user'></i></span><span className='nav_text'>About</span></Link></li>
          <li onMouseEnter={addActive} onMouseLeave={removeActive} ><Link to='/services' ><span className='nav_icon'><i className='icon-cogs'></i></span><span className='nav_text'>Projects</span></Link></li>
          <li onMouseEnter={addActive} onMouseLeave={removeActive} ><Link to='/cv' ><span className='nav_icon'><i className='icon-profile'></i></span><span className='nav_text'>Resume</span></Link></li>
        </ul>
        <Outlet />
      </div>
   </>
  )
}

export default Nav

