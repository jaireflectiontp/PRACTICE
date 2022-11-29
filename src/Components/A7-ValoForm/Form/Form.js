import React from 'react';
import Header from './Header/Header';
import '../FormApp.scss';
import logo from '../Imgs/RiotGamesLogo.png'
import Main from './Main/Main';
import Footer from './Footer/Footer';
const Form = () => {
  return (
    <div>
     <header><Header logoImg={logo} alt='RiotGames'/></header>
     <main><Main/></main>
     <footer><Footer/></footer>
    </div>
  )
}

export default Form
