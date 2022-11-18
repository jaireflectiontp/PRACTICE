import React from 'react'
import './intro.scss'
import mypic from '../../Images/prof.jpg'
import Nav from '../Navigation/Nav'
const Intro = () => {
  const getToContact = () => {
    window.location.href = '/contact '
  }

  return (
    <div>
      <Nav />
      <div className='intro_page'>
        <h1>About Me</h1>
        <hr/>
        <div className='intro_inner'>
          <div className='identity'>
            <div className='my_profile'>
              <img src={mypic} alt='my-prof' />
            </div>
            <div className='my_info'>
              <p>Hello, My name is Jay Rautel and i am from India, i have completed my bachelore`s in Mechanical Engineering,
                <br /> but i also had an interest in the internet things so i took a step into the the world of web developement  & <br /> started learning it also looking forward to become a good developer.
                I like to learn new things and am always interested in learning new things related to web development.
                During Engineering i acquired some of skills for instance problem solving, team working which can be helpful while working and work efficiently with clients.
              </p>
              <button className='contactBtn' onClick={getToContact}>Contact Me!</button>
            </div>
          </div>
          <div className='stats'>
            <div className='experience'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='skills'>
            <div class="box">
                <h2>Skills Bar</h2>
                <div class="skillbox">
                  <p>HTML</p>
                  <p>90%</p>
                  <div class="skill">
                    <div class="level lvl1"></div>
                  </div>
                </div>
                <div class="skillbox">
                  <p>CSS</p>
                  <p>80%</p>
                  <div class="skill">
                    <div class="level lvl2" ></div>
                  </div>
                </div>
                <div class="skillbox">
                  <p>JavaScript</p>
                  <p>85%</p>
                  <div class="skill">
                    <div class="level lvl3"></div>
                  </div>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
