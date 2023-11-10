import React, {useState} from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {IoCloseOutline} from 'react-icons/io5';
import {MdOutlineEmail} from 'react-icons/md';
import {PiTelegramLogoLight} from 'react-icons/pi';
import {SlSocialLinkedin} from 'react-icons/sl';
import styles from './Navigation.module.css'

const Navigation = () => {
  const menuItems = [
    {icon: <MdOutlineEmail fill={'#DEE1E6'} size={36}/>, url: 'mailto:lanina.kateryna@gmail.com'},
    {icon: <SlSocialLinkedin fill={'#DEE1E6'} size={36}/>, url: 'https://www.linkedin.com/in/kateryna-lanina/'},
    {icon: <AiFillGithub fill={'#DEE1E6'} size={36}/>, url: 'https://github.com/lanina90'},
    {icon: <PiTelegramLogoLight fill={'#DEE1E6'} size={36}/>, url: 'https://t.me/KaterynaLanina'},
  ]

  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <ul className={`${styles.menu} ${isActive ? styles.active : ''}`}>
        <div
          className={`${styles.toggle} ${isActive ? styles.active : ''}`}
          onClick={() => setIsActive(!isActive)}>
          <IoCloseOutline/></div>
        {menuItems.map(({icon, url}, index) => (
          <li className={styles.item} key={index} style={{'--i': index} as React.CSSProperties}>
            <a href={url}>
              <span className={styles.icon}>{icon}</span>
            </a>
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default Navigation;