import { useState } from 'react'
import './css/App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import JSLogo from './assets/js-logo.webp'
import Particle from './components/Particle'

function App() {

  const [burger, setBurger] = useState(false)
  const navbarWrapper = document.querySelector(".navbar-wrapper")

  function openMenu() {
    setBurger(!burger);
    navbarWrapper.classList.toggle("nav-active");
  }

  return (
    <>
    <div id='particle-wrapper'><Particle /></div>
    <nav id='navbar'>
      <div className='navbar-logo'><NavLink to="/"><img src={JSLogo}/></NavLink></div>
      <ul className="navbar-wrapper">
        <li className='navbar-item'><NavLink to="/">Home</NavLink></li>
        <li className='navbar-item'><NavLink to="/projects">Projects</NavLink></li>
        <li className='navbar-item'><NavLink to="/about">About</NavLink></li>
      </ul>
      <div id='burger-wrapper' onClick={openMenu}><i className={burger ? "fas fa-bars" : "fas fa-times"}></i></div>
    </nav>
      <main id='main-wrapper'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
    <footer id="footer" className="f-jc-ac"><p>© {new Date().getFullYear()} Jordan Schulte</p></footer>
    </>
  )
}

export default App
