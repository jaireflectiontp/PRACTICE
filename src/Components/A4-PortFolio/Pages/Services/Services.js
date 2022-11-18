import React from 'react'
import './service.scss'
import bg from '../../Images/background.jpg'
import stopwatch from '.././../Images/stopwatch-project.png';
import lol from '.././../Images/LOL-project.jpg';
import calc from '.././../Images/calculator-project.jpg';
import ford from '.././../Images/ford-project.jpg';
import Nav from '../Navigation/Nav'
import Card from './Card'
const Services = () => {

  return (
    <>
      <Nav />
      <div className='projects_page'>
        <hr />
        <div className='page_inner'>
          <div class="container text-center">
            <div class="row row-cols-4">
              <div class="col"><Card img={stopwatch} link='stopwatch'/></div>
              <div class="col"><Card img={lol} link='library of life'/></div>
              <div class="col"><Card img={calc}  link='calculator'/></div>
              <div class="col"><Card img={ford}  link='ford'/></div>
            </div>
          </div>
          <hr />
          <div class="container text-center">
            <div class="row row-cols-4">
              <div class="col"><Card /></div>
              <div class="col"><Card /></div>
              <div class="col"><Card /></div>
              <div class="col"><Card /></div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </>
  )
}

export default Services
