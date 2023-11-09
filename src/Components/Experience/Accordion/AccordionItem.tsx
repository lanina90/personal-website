import React, {useState} from 'react';
import {ReactComponent as Minus} from '../../../assets/img/ui/minus.svg';
import {ReactComponent as Plus} from '../../../assets/img/ui/plus.svg';
import styles from './Accordion.module.css'

const AccordionItem = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.accordion}>
      <div className={styles.icon} onClick={onClickHandler}>
        {isOpen ? <Minus/> : <Plus/>}
      </div>
      <div className={styles.info}>
        <div className={styles.position}>
          <h3>Frontend Developer</h3>
          <p>Company</p>
        </div>
        <div className={styles.years}>
          2022-2023
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;