import React from 'react';
import './Body.css';
import image2 from "../../assets/Group28.png";

const Body =() => {
   
    return (
        <div className='bodypart'>
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