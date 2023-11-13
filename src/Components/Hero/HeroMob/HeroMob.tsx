import React, {useEffect, useState} from 'react';
import Container from '../../Container/Container';
import styles from '../Hero.module.css'

const HeroMob = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <Container component={'section'} className={styles.hero}>
      <div className={styles.hero__intro}>
        <div className={styles.heading}>
          <h1 className={`${styles.title} ${isActive ? styles.active : ''}`}>
            Kateryna Lanina
          </h1>
          <h2 className={styles.subheading}>FRONTEND DEVELOPER</h2>
        </div>
        <div className={`${styles.about} ${isActive ? styles.active : ''}`}>
          <p className={styles.hi}>Hi,</p>
          <p className={styles.text}>
            "I'm Kateryna Lanina, a Front-End Developer with a passion for crafting engaging user
            experiences. Welcome to my portfolio!"
          </p>
        </div>
      </div>

    </Container>
  );
};

export default HeroMob;