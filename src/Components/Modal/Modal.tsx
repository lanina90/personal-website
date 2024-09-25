import React from 'react';
import {GrClose} from 'react-icons/gr';
import styles from './modal.module.css'

const Modal = ({onClose, url}: {url:string, onClose: ()=> void}) => {
  return (
    <div className={styles['overflow']}>
      <div className={styles['close']} onClick={onClose}  >
        <GrClose size={40} color='#FFFFFFFF'/>
      </div>
      <div className={styles['modal']}>
        <iframe src={url} frameBorder='0'></iframe>
      </div>
    </div>
  );
};

export default Modal;