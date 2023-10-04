import React from 'react';
import Cube from "../Cube/Cube";
import styles from './Hero.module.css'
import Container from "../Container/Container";

const Hero = () => {
  return (
    <Container component={'section'} className={styles.hero}>
        <div className={styles.hero__intro}>
          <h1>I'm a front developer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid, amet culpa distinctio dolorem eligendi, et eveniet fuga libero nihil numquam obcaecati qui quibusdam quisquam reprehenderit sint ullam unde voluptatum?
            Accusamus aspernatur beatae culpa deleniti labore magnam maxime mollitia pariatur recusandae sequi.
          </p>
        </div>
        <Cube/>
    </Container>
  );
};

export default Hero;