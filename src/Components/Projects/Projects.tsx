import React from 'react';
import {ReactComponent as Project} from '../../assets/img/projects/projects.svg';
import Container from '../Container/Container';
import ProjectCard from '../ProjectCard/ProjectCard';
import Heading from '../SectionHeading/Heading';
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <Container component={'section'} className={styles.projects}>
      <div className={styles.heading}>
        <Heading icon={<Project/>} title={'projects'} text={'Featured Work and Project Showcase'}/>
      </div>
      <div className={styles.block}>
        <ProjectCard/>
      </div>
    </Container>
  );
};

export default Projects;