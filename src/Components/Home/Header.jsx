import React from 'react'
import './Header.css'
import  csithub from "../../assets/CsitHub.png"

function Header() {
  return (
    <div className='header'>
      <img src={csithub} alt='csithub' className='csithub'/>
      <div>
        <nav className='navcontainer'>
          <ul className='navbar'> 
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Notes</a></li>
            <li><a href='#'>Sample Questions</a></li>
            <li><a href='#'>Syallabus</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
