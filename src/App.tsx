import React, {FC, lazy} from 'react'
import './App.css'
import Header from './Components/Header/Header';

const Hero = lazy(() => import('./Components/Hero/Hero'));
const About = lazy(() => import('./Components/About/About'));
const Skills = lazy(() => import('./Components/Skills/Skills'));
const Projects = lazy(() => import('./Components/Projects/Projects'));
const Experience = lazy(() => import('./Components/Experience/Experience'));
const Contacts = lazy(() => import('./Components/Contacts/Contacts'));


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
