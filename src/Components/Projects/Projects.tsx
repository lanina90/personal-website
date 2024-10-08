import React, {Fragment} from 'react';
import {ReactComponent as Project} from '../../assets/img/projects/projects.svg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Container from '../Container/Container';
import ProjectCard from '../ProjectCard/ProjectCard';
import Heading from '../SectionHeading/Heading';
import projects from './db.json';
import styles from './Projects.module.css'

const Projects = () => {
  const [elementRef, isIntersected] = useIntersectionObserver()

  return (
    <Container component={'section'} className={styles.projects} id={'projects'}>
      <div className={styles.heading}>
        <Heading
          icon={<Project/>}
          title={'projects'}
          text={'Featured Work and Project Showcase'}
          isIntersected={isIntersected}
          ref={elementRef}
        />
      </div>
      <div className={styles.block}>
        {projects.map((item, index) =>
          <Fragment key={item.id}>
            <ProjectCard
              title={item.title}
              index={index + 1}
              desc={item.desc}
              stack={item.stack}
              website={item.website}
              git={item.git}
              webm={item.webm}
              mp4={item.mp4}
              poster={item.poster}
            />
          </Fragment>
        )}
      </div>
      <p className={styles.caption}>***More projects you can find in <a href="https://github.com/lanina90">GitHub
        repository</a></p>
    </Container>
  );
};

export default Projects;