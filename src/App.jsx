import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Home from './Components/Home/Home.jsx'
import Notes from './Compoents/Notes/Notes.jsx'


const App = () => {
  return (
     <>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/notes" element={<Notes />} />
        </Routes>
     </>
  )
}


export default App