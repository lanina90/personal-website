import React from 'react';
import styles from '../Header.module.css';

const DesktopMenu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#work">Experience</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;