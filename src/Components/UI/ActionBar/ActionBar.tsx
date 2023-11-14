import React from 'react';
import {BsDownload} from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';
import {PiTelegramLogoLight} from 'react-icons/pi';
import {SlSocialLinkedin} from 'react-icons/sl';
import styles from './ActionBar.module.css'

const ActionBar = () => {
  return (
    <div className={styles.actionBar}>
      <a href="/" >
        <div data-title='Resume' className={styles.action} >
          <BsDownload fill={'#DEE1E6'} size={30}/>
        </div>
      </a>
      <a href="mailto:lanina.kateryna@gmail.com">
        <div data-title='Email me' className={styles.action}>
          <MdOutlineEmail fill={'#DEE1E6'} size={36}/>
        </div>
      </a>
      <a href="https://t.me/KaterynaLanina" rel='noreferrer' target='_blank'>
        <div data-title='Contact me' className={styles.action}>
          <PiTelegramLogoLight fill={'#DEE1E6'} size={36}/>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/kateryna-lanina/" rel='noreferrer' target='_blank'>
        <div data-title='Connect' className={styles.action}>
          <SlSocialLinkedin fill={'#DEE1E6'} size={30}/>
        </div>
      </a>
    </div>
  );
};

export default ActionBar;