import React from 'react'
import styles from './Header.module.css'
import Container from '../Container/Container'
import Logo from '../../assets/img/logo.svg'
import {useMedia} from '../../hooks/useMedia';

const Header = () => {
  const {isMobile} = useMedia()
  return (
    <Container component="header" className={styles.logo}>
      <img src={Logo} width={'44px'} alt="Logo" />

      <nav>
        <a href="">About</a>
        <a href="">Experience</a>
        <a href="">Contacts</a>
      </nav>

    </Container>
  )
}

export default Header
