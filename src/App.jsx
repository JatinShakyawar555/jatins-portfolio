import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'



const App = () => {
 
  

  return (
    <div className='w-100% h-100vh  overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App