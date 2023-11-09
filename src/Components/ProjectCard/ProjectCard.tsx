import React, {FC} from 'react';
import Links from '../UI/Link/Links';
import styles from './ProjectCard.module.css'

interface ProjectCardProps{
  img: string,
  title: string,
  index: number,
  desc: string,
  stack: string[],
  website: string,
  git: string
}

const ProjectCard: FC<ProjectCardProps> = ({img, title, index, desc, stack, website, git}) => {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <img src={img} alt={title}/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.title}>
            <span>0{index}</span>
            <h3>{title}</h3>
          </div>
          <div className={styles.text}>
            <p>{desc}</p>
          </div>
          <div className={styles.stack}>
            <span>Stack:</span>
            <div className={styles.stackList}>
              {stack.map((item, index) =>
                <span key={index}>{item}</span>
              )}
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <Links link={website} variant={'primary'}>Visit site</Links>
          <Links link={git} variant={'secondary'}>Go to Github</Links>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;