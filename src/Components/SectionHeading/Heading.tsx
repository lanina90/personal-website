import {type ReactElement, type Ref, type SVGProps} from 'react';
import styles from './Heading.module.css';

interface HeadingProps{
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  isIntersected?: boolean;
  ref?: Ref<HTMLDivElement>;
}

const Heading = ({icon, title, text, isIntersected, ref}: HeadingProps) => {

  return (
    <div className={styles.info} ref={ref}>
      <div className={styles.icon}>
        {isIntersected && icon}
      </div>
      <div className={styles.heading}>
        <h2 className={`${styles.title} ${isIntersected ? styles.visible : styles.hidden}`}>{title}</h2>
        <p className={`${styles.text} ${isIntersected ? styles['text-visible'] : styles['text-hidden']}`}>{text}</p>
      </div>
    </div>
  );
}

export default Heading;