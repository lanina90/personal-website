import React from 'react';
import styles from '../Header.module.css';

const MobileMenu = () => {
  return (
    <>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#work">Experience</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </>
  );
};

export default MobileMenu;