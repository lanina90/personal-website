import React, { FC } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About';
import Technologies from './Components/Techologies/Technologies';

const App: FC = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Hero />
        <About/>
        <Technologies/>
      </div>
    </div>
  )
}

export default App
