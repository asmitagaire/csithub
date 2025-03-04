import React from 'react'
import "./Testimonials.css"
import testi from "../../assets/Group28.png"

function Testimonials() {
  return (
    <div>
      <div className='firstpart'>
      <p className='why'>Why <span>CSIT HUB?</span></p>
      <p>Exam-focused, and community-driven learning—free, easy, and always up-to-date!</p>
      </div>
      <div className='secondpart'>
        <img src={testi} alt='image' className='testimonialimage'/>
        </div>
    </div>
  )
}

export default Testimonials
