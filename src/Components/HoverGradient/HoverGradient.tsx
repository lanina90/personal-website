import React, {FC, ReactNode} from 'react';
import styles from './HoverGradient.module.css'

interface HoverGradientProps{
  children: ReactNode;
}
const HoverGradient: FC<HoverGradientProps> = ({children}) => {
  return (
    <div className={styles.container}>
      {children}

    </div>
  );
};

export default HoverGradient;


