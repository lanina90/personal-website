import React, {useEffect, useRef, useState} from 'react';
import Container from '../Container/Container';
import styles from './Techologies.module.css'
import {BiLogoReact} from 'react-icons/bi';


const Technologies = () => {
  const [position, setPosition] = useState({x: 0, y: 0, opacity: 0});
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      if (
        e.clientY < (rect.top) || e.clientY > rect.bottom
      ) {
        setPosition({ ...position, opacity: 0 }); // Зробити курсор невидимим
        return;
      }

      setPosition({
        x: e.clientX - rect.left - 175,
        y: e.clientY - rect.top - 175,
        opacity: 1,
      });
    }
  };

  return (
    <Container component={'section'}  >
     <div ref={containerRef} onMouseMove={mouseMoveHandler} className={styles.technologies}>
       <div
         className={styles.cursor}
         style={{
           left: `${position.x}px`,
           top: `${position.y}px`,
           opacity: position.opacity,
         }}
       />
       <div className={styles.row}>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
       </div>

       <div className={`${styles.row} ${styles.moved}`}>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}><BiLogoReact size={42}/></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>

       </div>

       <div className={styles.row}>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>

       </div>

       <div className={`${styles.row} ${styles.moved}`}>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>


       </div>
       <div className={styles.row}>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>
         <div className={styles.hexagon}></div>

       </div>
     </div>


    </Container>
  );
};

export default Technologies;