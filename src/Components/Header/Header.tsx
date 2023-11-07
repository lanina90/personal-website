import React, {useState} from 'react'
import Container from '../Container/Container'
import Logo from '../../assets/img/logo.svg'
import {useMedia} from '../../hooks/useMedia'
import MobileMenu from './MenuMob/MobileMenu';
import DesktopMenu from './MenuDesc/DesktopMenu';
import {ReactComponent as Menu} from '../../assets/img/header/menu.svg';
import {ReactComponent as Close} from '../../assets/img/header/close.svg';
import styles from './Header.module.css'

const Header = () => {
  const {isMobile} = useMedia()
  const [isOpen, setIsOpen] = useState(false)
 const onClickMenu = () => {
   setIsOpen(!isOpen)
 }
  return (
   <>
     {isOpen && <div className={styles.background}/> }
     <Container component="header" className={ styles.header}>
       <img src={Logo} alt="Logo"/>
       {isMobile
         ? isOpen ? <Close onClick={onClickMenu}/> : <Menu onClick={onClickMenu}/>
         : <DesktopMenu/>
       }
     </Container>
     {isOpen && <MobileMenu/>}
   </>
  )
}

export default Header
