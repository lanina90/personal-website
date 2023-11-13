import React, {useState} from 'react'
import {ReactComponent as Close} from '../../assets/img/header/close.svg';
import Logo from '../../assets/img/header/logo.svg'
import {ReactComponent as Menu} from '../../assets/img/header/menu.svg';
import {useMedia} from '../../hooks/useMedia'
import Container from '../Container/Container'
import styles from './Header.module.css'
import DesktopMenu from './MenuDesc/DesktopMenu';
import MobileMenu from './MenuMob/MobileMenu';

const Header = () => {
  const {isMobile} = useMedia()
  const [isOpen, setIsOpen] = useState(false)
  const onClickMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className={styles.wrapper}>
      {isOpen && <div className={styles.background}/>}
      <Container component="div" className={styles.header}>
        <a href="/personal-website">
          <img src={Logo} alt="Logo" width="48px" height="48px"/>
        </a>
        {isMobile
          ? isOpen
            ? <Close onClick={onClickMenu} style={{cursor: 'pointer'}}/>
            : <Menu onClick={onClickMenu} style={{cursor: 'pointer'}}/>
          : <DesktopMenu/>
        }
      </Container>
      {isOpen && <MobileMenu setIsOpen={setIsOpen}/>}
    </header>
  )
}

export default Header
