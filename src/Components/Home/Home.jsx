import React from 'react'
import Body from "./Body"
import Testimonials from "./Testimonials"
import BrainTeaser from './BrainTeaser'
import Footer from "./Footer"
import Navbar from './Navbar'

function Home() {
  return (
    <div>
       <Navbar/>
      <Body/>
     <Testimonials/>
      <BrainTeaser/>
      <Footer/>
    </div>
  )
}

export default Home