import React, {forwardRef, ReactElement, SVGProps} from 'react';
import styles from './Heading.module.css';

interface HeadingProps{
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  isIntersected?: boolean;
}

const Heading = forwardRef<HTMLDivElement, HeadingProps>(({icon, title, text, isIntersected}, ref) => {

  return (
    <div className={styles.info} ref={ref}>
      <div className={styles.icon}>
        {isIntersected && icon}
      </div>
      <div className={styles.heading}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
})
Heading.displayName = 'Heading';


export default Heading;