import React, {FC} from 'react';
import styles from '../Header.module.css';

interface MobileMenuProps{
  setIsOpen: React.Dispatch<boolean>
}
const MobileMenu: FC<MobileMenuProps> = ({setIsOpen}) => {
  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <a href="#about" onClick={() => setIsOpen(false)}>
          <span className={styles.anchor}>About</span>
          <span className={styles.anchorHover}>About</span>
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>
          <span className={styles.anchor}>Projects</span>
          <span className={styles.anchorHover}>Projects</span>
        </a>
        <a href="#work" onClick={() => setIsOpen(false)}>
          <span className={styles.anchor}>Experience</span>
          <span className={styles.anchorHover}>Experience</span>
        </a>
        <a href="#contacts" onClick={() => setIsOpen(false)}>
          <span className={styles.anchor}>Contacts</span>
          <span className={styles.anchorHover}>Contacts</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;