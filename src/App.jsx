import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Realisation from './pages/Realisation'
import Contact from './pages/Contact'

import About from './pages/About'
import Services from './pages/Services'
import MentionsLegales from './pages/MentionsLegales'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Realisation />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/mentionsLegales' element={<MentionsLegales />} />
      </Routes>
    </>
  )
}

export default App
