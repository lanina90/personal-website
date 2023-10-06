import React, {useEffect, useState} from 'react'
import Cube from '../Cube/Cube'
import styles from './Hero.module.css'
import Container from '../Container/Container'

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);


  return (
    <Container component={'section'} className={styles.hero}>
      <div className={styles.hero__intro}>
        <div>
          <h1 className={isActive ? `${styles.active}` : ''}>
            Hi! I'm <span>Kateryna</span>
          </h1>
        </div>
        <p className={isActive ? `${styles.active}` : ''}>
          I'm a Front-End Developer with a decade of experience in SEO, which gives me a comprehensive understanding of
          website structure and optimization requirements. I'm passionate about creating websites, 3D visuals, and developing robust web applications.
        </p>
      </div>
      <Cube/>
    </Container>
  )
}

export default Hero
