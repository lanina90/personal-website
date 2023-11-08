import React, {useEffect, useRef, useState} from 'react';
import styles from '../Hero.module.css';
import Container from '../../Container/Container';
import Cube from '../../Cube/Cube';

const HeroDesc = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const cubeRef = useRef(null);
  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      threshold: [1, 0.4]
    });

    if(cubeRef.current){
      observer.observe(cubeRef.current);
    }

    return () => observer.disconnect(); // Від'єднуємо обсервер при розмонтованні компоненту
  }, []);

  return (
   <div>
     <Container component={'section'} className={`${styles.hero} ${isIntersecting ? styles.heroSmall : ''}`}>
       <div className={styles.heading}>
         <h1 className={`${isIntersecting ? styles.titleSmall : styles.title}`}>
           Kateryna Lanina
         </h1>
         <h2 className={`${isIntersecting ? styles.subheadingSmall : styles.subheading}`}>FRONTEND DEVELOPER</h2>
       </div>
       <div ref={cubeRef}><Cube isIntersecting={isIntersecting}/></div>
     </Container>
     <div className={styles.about}>
       <p className={styles.hi}>Hi,</p>
       <p className={styles.text}>
         "I'm Kateryna Lanina, an experienced frontend developer with a passion for crafting engaging user
         experiences. Welcome to my portfolio!"
       </p>
     </div>
   </div>
  );
};

export default HeroDesc;