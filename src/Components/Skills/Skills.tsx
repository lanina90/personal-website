import React from 'react';
import {ReactComponent as Skill} from '../../assets/img/skills/skills.svg';
import Container from '../Container/Container';
import Heading from '../SectionHeading/Heading';
import styles from './Skills.module.css'
import Technologies from './Technologies/Technologies';

const Skills = () => {
  return (
    <Container component={'section'} className={styles.skills}>
      <Heading icon={<Skill/>} title={'Skills'} text={'My focused technologies: current areas of proficiency'}/>
      <Technologies/>
    </Container>
  );
};

export default Skills;