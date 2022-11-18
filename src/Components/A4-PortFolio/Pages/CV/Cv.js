import React from 'react'
import resume from './Jay Rautel.pdf'
import './cv.scss'
import Nav from '../Navigation/Nav'
const Cv = () => {
  return (
    <>
    <Nav/>
    <div className='opendoc'>
   <a href={resume}>Click to see</a>
    </div>
    </>
  )
}

export default Cv
