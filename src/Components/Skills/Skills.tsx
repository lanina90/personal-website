import React from 'react';
import {ReactComponent as Skill} from '../../assets/img/skills/skills.svg';
import Container from '../Container/Container';
import styles from './Skills.module.css'
import Technologies from './Technologies/Technologies';

const Skills = () => {
  return (
    <Container component={'section'} className={styles.skills}>
      <div className={styles.info}>
        <div className={styles.icon}>
          <Skill/>
        </div>
        <div className={styles.heading}>
          <h2 className={styles.title}>Skills</h2>
          <p className={styles.text}>My focused technologies: current areas of proficiency</p>
        </div>
      </div>
      <Technologies/>
    </Container>
  );
};

export default Skills;