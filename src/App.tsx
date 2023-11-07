import React, { FC } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'


const App: FC = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App
