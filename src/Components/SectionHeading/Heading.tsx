import React, {FC, ReactComponentElement} from 'react';
import styles from './Heading.module.css';

interface HeadingProps{
  icon: ReactComponentElement<any>;
  title: string;
  text: string
}
const Heading: FC<HeadingProps> = ({icon, title, text}) => {
  return (
    <div className={styles.info}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default Heading;