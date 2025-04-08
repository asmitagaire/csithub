import React from 'react'
import "./Testimonials.css"
import testi from "../../assets/Group25.png"
import testii from "../../assets/Group26.png"
import testiii from "../../assets/Group27.png"

function Testimonials() {
  return (
    <div>
      <div className='firstpart'>
      <p className='why'>Why <span>CSIT HUB?</span></p>
      <p>Exam-focused, and community-driven learning—free, easy, and always up-to-date!</p>
      </div>
      <div className='secondpart'>
        <img src={testi} alt='image' className='testimonialimage1'/>
        <img src={testii} alt='image' className='testimonialimage2'/>
        <img src={testiii} alt='image' className='testimonialimage3'/>
        </div>
    </div>
  )
}

export default Testimonials
