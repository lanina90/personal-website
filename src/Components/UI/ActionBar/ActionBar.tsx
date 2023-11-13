import React from 'react';
import {BsDownload} from 'react-icons/bs';
import {MdOutlineEmail} from 'react-icons/md';
import {PiTelegramLogoLight} from 'react-icons/pi';
import {SlSocialLinkedin} from 'react-icons/sl';
import styles from './ActionBar.module.css'

const ActionBar = () => {
  return (
    <div className={styles.actionBar}>
      <div className={styles.action}>
        <BsDownload fill={'#DEE1E6'} size={30}/>
      </div>
      <div className={styles.action}>
        <MdOutlineEmail fill={'#DEE1E6'} size={36}/>
      </div>
      <div className={styles.action}>
        <PiTelegramLogoLight fill={'#DEE1E6'} size={36}/>
      </div>
      <div className={styles.action}>
        <SlSocialLinkedin fill={'#DEE1E6'} size={36}/>
      </div>
    </div>
  );
};

export default ActionBar;