import React from 'react';
import {ReactComponent as Contact} from '../../assets/img/contact/contact.svg';
import background from '../../assets/img/ui/lines.svg'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Container from '../Container/Container';
import styles from './Contacts.module.css'
import Navigation from './Navigation/Navigation';

const Contacts = () => {
  const [elementRef, isIntersected] = useIntersectionObserver({rootMargin: '20px'})

  return (
   <footer className={styles.footer}
   style={{backgroundImage: `url(${background}`}}
   ref={elementRef}>
     <Container component={'div'} className={styles.contacts} id={'contacts'}>
       <div className={styles.icon} >
         {isIntersected && <Contact/>}
       </div>
       <div className={styles.info}>
         <h2 className={styles.title}>LEt’s work together </h2>
         <div className={styles.navigation}>
           <Navigation/>
         </div>
       </div>
       <span className={styles.rights}>Designed by Stoliarova Iryna 2023© All rights reserved.</span>
     </Container>
   </footer>
  );
};

export default Contacts;