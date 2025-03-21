import React from 'react';
import image from "../../assets/Group2.png";
import './Body.css';
import image2 from "../../assets/Group28.png";
import csithub from "../../assets/CsitHub.png";

function Body() {
    return (
        <div className='bodypart'>
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
            
            {/* Hero Section */}
            <div className='middletext'>
                <p>Ace Your <span className='highlight'>Exams</span> with the Best</p>
                <p>Study Materials!</p>
                <div className='des'>Access high-quality notes and sample questions to boost your preparation</div>
                <button className='button1'>Ask Now</button>
            </div>
        </div>
    )
}

export default Body