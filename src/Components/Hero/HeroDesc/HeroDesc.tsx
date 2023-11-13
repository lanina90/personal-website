import React, {useEffect, useRef, useState} from 'react';
import Container from '../../Container/Container';
import Cube from '../../Cube/Cube';
import styles from '../Hero.module.css';

const HeroDesc = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const cubeRef = useRef(null);
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.intersectionRatio < 0.8) return;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      threshold: [0, 0.8]
    });

    if(cubeRef.current){
      observer.observe(cubeRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
   <>
     <Container component={'section'} className={`${styles.hero} ${isIntersecting ? styles.heroSmall : ''}`}>
       <div className={styles.heading}>
         <h1 className={`${isIntersecting ? styles.titleSmall : styles.title}`}>
           Kateryna Lanina
         </h1>
         <h2 className={`${isIntersecting ? styles.subheadingSmall : styles.subheading}`}>FRONTEND DEVELOPER</h2>
       </div>
       <div ref={cubeRef} className={styles.cube}><Cube isIntersecting={isIntersecting}/></div>
     </Container>
     <Container component={'div'} className={`${styles.about} ${isIntersecting ? styles.opacity : ''}`}>
       <p className={styles.hi}>Hi,</p>
       <p className={styles.text}>
         "I'm Kateryna Lanina, a Front-End Developer with a passion for crafting engaging user
         experiences. Welcome to my portfolio!"
       </p>
     </Container>
   </>
  );
};

export default HeroDesc;