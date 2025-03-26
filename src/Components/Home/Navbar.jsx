import React from 'react';
import './navbar.css';
import csithub from "../../assets/CsitHub.png";

const Navbar =() => {
   
    return (
        <div className='navpart'>
            {/* Header Section */}
            <div className='header'>
                <img src={csithub} alt='csithub' className='csithub' />
                <nav className='navcontainer'>
                <ul className='navbar'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Notes</a></li>
                        <li><a href='#'>Sample Questions</a></li>
                        <li><a href='#'>Syllabus</a></li>
                    </ul>
                </nav>
            </div>
        </div>

)
}

export default Navbar