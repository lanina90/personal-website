import React, {useEffect, useState} from 'react'
import Cube from '../Cube/Cube'
import styles from './Hero.module.css'
import Container from '../Container/Container'

const Hero = () => {

  const [isHeadingActive, setIsHeadingActive] = useState(false);
  const [isDescActive, setIsDescActive] = useState(false);

  useEffect(() => {
    setIsHeadingActive(true);
    setIsDescActive(true)
  }, []);

  return (
    <Container component={'section'} className={styles.hero}>
      <div className={styles.hero__intro}>
        <span>Hi! My name is</span>
        <h1 className={isHeadingActive ? `${styles.active}` : ''}>Kateryna Lanina</h1>
        <p className={isHeadingActive ? `${styles.active}` : ''}>
          I'm a web developer from Ukraine. My passion is creating websites, 3D visuals and web applications.
        </p>
      </div>
      <Cube/>
    </Container>
  )
}

export default Hero
