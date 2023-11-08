import React from 'react';
import Container from '../Container/Container';
import {ReactComponent as Info} from '../../assets/img/about/info.svg';
import Photo from '../../assets/img/about/me.jpg';
import styles from './About.module.css'

const About = () => {
  return (
    <Container component={'section'} className={styles.container}>
      <div className={styles.about}>
        <div className={styles.icon}>
          <Info width={'200px'}/>
        </div>
        <h2>About</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          <img src={Photo} alt='Kateryna Lanina'/>
        </div>
        <div>
          <p className={styles.text}>I'm a Front-End Developer with a decade of experience in SEO, which gives me a comprehensive understanding
            of website structure and optimization requirements. I'm passionate about creating websites, 3D visuals, and
            developing robust web applications.</p>
        </div>
      </div>

    </Container>
  );
};

export default About;