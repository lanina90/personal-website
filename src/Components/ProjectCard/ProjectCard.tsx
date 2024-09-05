import React, {FC} from 'react';
import Links from '../UI/Link/Links';
import styles from './ProjectCard.module.css'
import VideoComponent from './Video/VideoComponent';

interface ProjectCardProps{
  webm: string,
  mp4: string,
  poster: string,
  title: string,
  index: number,
  desc: string,
  stack: string[],
  website: string,
  git: string
}

const ProjectCard: FC<ProjectCardProps> = ({webm, mp4, poster, title, index, desc, stack, website, git}) => {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <VideoComponent webm={webm} mp4={mp4} poster={poster}/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.title}>
            <span>0{index}</span>
            <h3>{title}</h3>
          </div>
          <div className={styles.description}>
           <p dangerouslySetInnerHTML={{ __html: desc }}/>
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