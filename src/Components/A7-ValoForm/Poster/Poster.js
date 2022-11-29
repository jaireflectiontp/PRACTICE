import React from 'react'
import '../../../style.css'
import './poster.scss'
import bg from '../Imgs/background.png'
const Poster = () => {
    return (
        <div className='poster_section'>
            <span>
                <i className='icon-minus'></i>  <i className='icon-cross'></i>
            </span>
            <img src={bg} alt='..'/>
            <span className='profile'><i className='icon-user'></i></span>
        </div>
    )
}

export default Poster
