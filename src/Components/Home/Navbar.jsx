import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import csithub from "../../assets/CsitHub.png";

const Navbar = () => {
   
    return (
        <div className='navpart'>
        
            <div className='header'>
                <img src={csithub} alt='csithub' className='csithub' />
                <nav className='navcontainer'>
                    <ul className='navbar'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/Notes">Notes</Link></li>
                        <li><Link to="/sample-questions">Sample Questions</Link></li>
                        <li><Link to="/syllabus">Syllabus</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar