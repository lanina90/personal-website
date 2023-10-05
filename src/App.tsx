import React, { FC } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About';

const App: FC = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Hero />
        <About/>
      </div>
    </div>
  )
}

export default App
