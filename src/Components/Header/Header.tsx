import React from 'react'
import styles from './Header.module.css'
import Container from '../Container/Container'
import Logo from '../../assets/img/logo.svg'

const Header = () => {
  return (
    <Container component="header" className={styles.logo}>
      <img src={Logo} width={'44px'} alt="Logo" />
    </Container>
  )
}

export default Header
