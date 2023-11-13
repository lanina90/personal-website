import React, {useEffect, useState} from 'react';
import {ReactComponent as Info} from '../../assets/img/about/info.svg';
import Photo from '../../assets/img/about/me.webp';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Container from '../Container/Container';
import styles from './About.module.css'

const About = () => {
  const [elementRef, isIntersected] = useIntersectionObserver()
  const [loadedImage, setLoadedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = () => {
      const image = new Image();
      image.src = Photo;
      image.onload = () => {
        setLoadedImage(image.src);
      };
    };

    loadImage();
  }, []);
  return (
    <Container component={'section'} className={styles.container} id={'about'}>
      <div className={styles.about} ref={elementRef}>
        {isIntersected && <div className={styles.icon}><Info/></div>}
        <h2 className={isIntersected ? styles.visible : styles.hidden}>About</h2>
      </div>
      <div className={styles.info}>
        <div className={styles.image}>
          {loadedImage && <img alt="Kateryna Lanina" src={loadedImage} width="100%" height="100%" />}
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