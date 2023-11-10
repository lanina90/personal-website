import React, {FC, Fragment} from 'react'
import './App.css'
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Experience from './Components/Experience/Experience';
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
        <Experience/>
        <Contacts/>
      </div>
    </>
  )
}

export default App
