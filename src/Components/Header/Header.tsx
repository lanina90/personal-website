import React from 'react';
import styles from './Header.module.css'
import Container from "../Container/Container";

const Header = () => {
  return (
    <Container component="header" className={styles.logo}>
      <img src='/img/logo.svg' width={'44px'} alt=""/>
      <p className={styles.logo__name}>Kateryna Lanina</p>
    </Container>
  );
};

export default Header;