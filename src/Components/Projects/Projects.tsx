import React, {Fragment} from 'react';
import {ReactComponent as Project} from '../../assets/img/projects/projects.svg';
import Container from '../Container/Container';
import ProjectCard from '../ProjectCard/ProjectCard';
import Heading from '../SectionHeading/Heading';
import projects from './db.json';
import styles from './Projects.module.css'

const Projects = () => {

  return (
    <Container component={'section'} className={styles.projects}>
      <div className={styles.heading}>
        <Heading icon={<Project/>} title={'projects'} text={'Featured Work and Project Showcase'}/>
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
              img={item.img}
            />
          </Fragment>
        )}

      </div>
    </Container>
  );
};

export default Projects;