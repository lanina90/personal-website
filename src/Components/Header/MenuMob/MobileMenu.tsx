import React from 'react';
import styles from '../Header.module.css';

const MobileMenu = () => {
  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#work">Experience</a>
        <a href="#contacts">Contacts</a>
      </nav>
    </div>
  );
};

export default MobileMenu;