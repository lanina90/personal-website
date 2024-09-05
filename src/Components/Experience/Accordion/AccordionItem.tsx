import React, {FC, useState} from 'react';
import {ReactComponent as Minus} from '../../../assets/img/ui/minus.svg';
import {ReactComponent as Plus} from '../../../assets/img/ui/plus.svg';
import styles from './Accordion.module.css';
import DutiesList from './DutiesList';

interface AccordionItemProps {
  position: string,
  company: string,
  period: string,
  duties: string[],
  info?: string,
  technologies?: string
}
const AccordionItem: FC<AccordionItemProps> = ({technologies, position, company, period, duties, info}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.main}>
          <div className={styles.icon} onClick={onClickHandler}>
            {isOpen ? <Minus/> : <Plus/>}
          </div>
          <div className={styles.info}>
            <div className={styles.position}>
              <h3>{position}</h3>
              <p>{company}</p>
              {technologies && <p>Stack: {technologies}</p>}
            </div>
            <div className={styles.years}>
              {period}
            </div>
          </div>
        </div>
        {isOpen &&
          <>
            {info && <div>{info}</div>}
            <DutiesList duties={duties}/>
          </>
        }
      </div>


    </>
  );
};

export default AccordionItem;