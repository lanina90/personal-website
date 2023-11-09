import React, {FC} from 'react';
import {ReactComponent as Icon} from '../../../assets/img/ui/list.svg';
import styles from './Accordion.module.css';

interface DutiesListProps {
  duties: string[]
}

const DutiesList: FC<DutiesListProps> = ({duties}) => {
  return (
    <div className={styles.dropdown}>
        {duties.map((item, index) =>
          <div key={index} className={styles.wrapper}>
            <div className={styles.iconList}>
              <Icon/>
            </div>
            <div className={styles.listText}>
              <p>{item}</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default DutiesList;