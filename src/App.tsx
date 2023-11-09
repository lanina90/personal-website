import React, {FC} from 'react'
import './App.css'
import About from './Components/About/About';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills';

const App: FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Hero />
        <About/>
        <Skills/>
      </div>
    </>
  )
}

export default App
