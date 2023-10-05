import React from 'react';
import Container from '../Container/Container';
import styles from './About.module.css'
import Photo from '../PhotoBlock/Photo';

const About = () => {
  return (
    <Container component={'section'} className={styles.about}>
      <h2>About me</h2>
        <Photo/>
    </Container>
  );
};

export default About;