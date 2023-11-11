import React from 'react';
import {ReactComponent as Skill} from '../../assets/img/skills/skills.svg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Container from '../Container/Container';
import Heading from '../SectionHeading/Heading';
import styles from './Skills.module.css'
import Technologies from './Technologies/Technologies';

const Skills = () => {
  const [elementRef, isIntersected] = useIntersectionObserver()

  return (
    <Container component={'section'} className={styles.skills}  >
      <Heading
        icon={<Skill/>}
        title={'Skills'}
        text={'My focused technologies: current areas of proficiency'}
        isIntersected={isIntersected}
        ref={elementRef}/>
      <Technologies/>
    </Container>
  );
};

export default Skills;