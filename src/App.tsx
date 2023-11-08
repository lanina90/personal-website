import React, { FC } from 'react'
import './App.css'
import About from './Components/About/About';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'


const App: FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Hero />
        <About/>
      </div>
    </>
  )
}

export default App
