import React from 'react'
import styles from './Header.module.css'
import Container from '../Container/Container'
import Logo from '../../assets/img/logo.svg'
import { useMedia } from '../../hooks/useMedia'

const Header = () => {
  const { isMobile } = useMedia()

  return (
    <Container component="header" className={styles.header}>
      <img src={Logo} alt="Logo" />
      {isMobile ? (
        <>
          <input type="checkbox" id="nav" className={styles.checkbox} />
          <label htmlFor="nav" className={styles.button}>
            <span className={styles.icon}>&nbsp;</span>
          </label>
          <div className={styles.background}>&nbsp;</div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a className={styles.link} href="#about">
                  About
                </a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#work">Experience</a>
              </li>
              <li className={styles.item}>
                <a className={styles.link} href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="#about">
                About
              </a>
            </li>
            <li>
              <a href="#work">Experience</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      )}
    </Container>
  )
}

export default Header
