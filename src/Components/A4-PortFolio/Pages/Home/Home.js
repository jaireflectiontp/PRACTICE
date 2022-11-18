import React, { useRef, useState } from 'react'
import '../../../../style.css'
import './home.scss'
import resume from '../docs/resume.pdf'
import Nav from '../Navigation/Nav'
function Home() {
 
  return (
    <>
    <Nav/>
      <div className='home_page'>
        <div className='home_info'>
          <div className='content'>
            <h2>Hii, I am</h2>
            <h1>Jay Rautel</h1>
            <h1 className='overlap'>Jay Rautel</h1>
            <h3>Developer</h3>
            <p>Frontend Developer
            </p>

            <div className='btns'>
              <a href={resume} download="JayRautel-Resume">
                <button type="button">Download CV</button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
{/* <div className='main'>
        { /*<div className="home_socialLinks">
          <a href=""><i class="icon-facebook2"></i></a>
          <a href=""><i class="icon-instagram"></i></a>
          <a href=""><i class="icon-twitter"></i></a>
          <a href=""><i class="icon-github"></i></a>
        </div>

        <div className='outline_top'></div>
        <div className='outline_bottom'></div>
        <div className="inner_main">
          <div className="info">
            <div className="greet">Hii, I am</div>
            <div className="name">Jay Rautel</div>
            <div className="profession">Developer</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita suscipit odit deserunt  doloremque assumenda omnis sed <br /> tempore obcaecati ex, deleniti est, fugiat ducimus adipisci architecto saepe consequatur possimus, perferendis ut?</p>
            <div>
              <a href={resume} download="PDF">
                <button type="button">Download CV</button>
              </a>
              <button onClick={getToContact}>Contact Me!</button>
            </div>
          </div>
        </div>

      </div>*/}