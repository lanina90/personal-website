import React from 'react';
import styles from '../Header.module.css';

const MobileMenu = () => {
  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <a href="#about">
          <span className={styles.anchor}>About</span>
          <span className={styles.anchorHover}>About</span>
        </a>
        <a href="#projects">
          <span className={styles.anchor}>Projects</span>
          <span className={styles.anchorHover}>Projects</span>
        </a>
        <a href="#work">
          <span className={styles.anchor}>Experience</span>
          <span className={styles.anchorHover}>Experience</span>
        </a>
        <a href="#contacts">
          <span className={styles.anchor}>Contacts</span>
          <span className={styles.anchorHover}>Contacts</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;