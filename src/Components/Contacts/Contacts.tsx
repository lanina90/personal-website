import React from 'react';
import {ReactComponent as Contact} from '../../assets/img/contact/contact.svg';
import Container from '../Container/Container';
import styles from './Contacts.module.css'
import Navigation from './Navigation/Navigation';

const Contacts = () => {
  return (
    <Container component={'footer'} className={styles.contacts}>
      <div className={styles.icon}>
        <Contact/>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>LEt’s work together </h2>
        <div className={styles.navigation}>
          <Navigation/>
        </div>
      </div>
      <span className={styles.rights}>Designed by Stoliarova Iryna 2023© All rights reserved.</span>
    </Container>
  );
};

export default Contacts;