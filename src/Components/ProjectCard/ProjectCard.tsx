import React, {FC, lazy, Suspense, useState} from 'react';
import {ReactComponent as SearchIcon} from '../../assets/img/search.svg';
import Links from '../UI/Link/Links';
import styles from './ProjectCard.module.css'

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

const Modal = lazy(() => import('../Modal/Modal'));

const ProjectCard: FC<ProjectCardProps> = ({webm, mp4, poster, title, index, desc, stack, website, git}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={styles.card}>
        <div className={styles.preview}>
          <div className={styles['touch']} onClick={() => setIsOpen(!isOpen)}>
           <SearchIcon width={50} height={50}/>
          </div>
          <div className={styles['poster']}>
            <img src={poster} alt={title}/>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <div className={styles.title}>
              <span>0{index}</span>
              <h3>{title}</h3>
            </div>
            <div className={styles.description}>
              <p dangerouslySetInnerHTML={{__html: desc}}/>
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
      {isOpen && <Suspense fallback={<div>Loading....</div>}>
        <Modal onClose={() => setIsOpen(!isOpen)} url={website}/>
      </Suspense>
      }
    </>
  );
};

export default ProjectCard;