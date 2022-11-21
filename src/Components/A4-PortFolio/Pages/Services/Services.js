import React from 'react'
import './service.scss'
import bg from '../../Images/background.jpg'
import stopwatch from '.././../Images/stopwatch-project.png';
import lol from '.././../Images/LOL-project.jpg';
import calc from '.././../Images/calculator-project.jpg';
import ford from '.././../Images/ford-project.jpg';
import petshop from '.././../Images/pet-shop.jpg';
import docsite from '.././../Images/docsite.jpg';
import portfolio from '.././../Images/ford-project.jpg';
import googlef from '.././../Images/googleform.png';
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
              <div class="col"><Card img={stopwatch} title='STOPWATCH' path='https://github.com/jaireflectiontp/JS-Training/tree/main/JS-Assignment-29_16082022(Timer)'/></div>
              <div class="col"><Card img={lol} title='LOL' path='https://github.com/jaireflectiontp/REACT_JS/tree/main/my-app/src/Components/08092022-Assignment'/></div>
              <div class="col"><Card img={calc}  title='CALCULATOR' path='https://github.com/jaireflectiontp/JS-Training/tree/main/JS-Assignment-2_18072022/'/></div>
              <div class="col"><Card img={ford}  title='FORD' path='https://github.com/jaireflectiontp/css-training/tree/main/Assignment09072022'/></div>
            </div>
          </div>
          <hr />
          <div class="container text-center">
            <div class="row row-cols-4">
              <div class="col"><Card img={googlef} title='GOOGLE FORM' path='https://github.com/jaireflectiontp/JS-Training/tree/main/JS-Assignment-7_20072022'/></div>
              <div class="col"><Card img={docsite} title='DOCTOR SITE' path='https://github.com/jaireflectiontp/JS-Training/tree/main/Assignment-2'/></div>
              <div class="col"><Card img={portfolio} title='PORTFOLIO' path='https://github.com/jaireflectiontp/PRACTICE/tree/main/src/Components/A4-PortFolio'/></div>
              <div class="col"><Card img={petshop} title='PET SHOP' path='https://github.com/jaireflectiontp/PRACTICE/tree/main/src/Components/A6'/></div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </>
  )
}

export default Services
