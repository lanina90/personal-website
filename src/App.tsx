import React, {FC} from 'react'
import './App.css'
import About from './Components/About/About';
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

const App: FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
      </div>
    </>
  )
}

export default App
