import React from 'react';
import {ReactComponent as Info} from '../../assets/img/about/info.svg';
import Photo from '../../assets/img/about/me.jpg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Container from '../Container/Container';
import styles from './About.module.css'

const About = () => {
  const [elementRef, isIntersected] = useIntersectionObserver()

  return (
    <Container component={'section'} className={styles.container} id={'about'}>
      <div className={styles.about} ref={elementRef}>
        {isIntersected && <Info/>}
        <h2>About</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src={Photo} alt="Kateryna Lanina"/>
        </div>
        <div>
          <p className={styles.text}>I'm a Front-End Developer with a decade of experience in SEO, which gives me a
            comprehensive understanding
            of website structure and optimization requirements. I'm passionate about creating websites, 3D visuals, and
            developing robust web applications.
          </p>
        </div>
      </div>

    </Container>
  );
};

export default About;