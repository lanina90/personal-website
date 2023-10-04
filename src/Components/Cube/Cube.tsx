import React from 'react'
import styles from './Cube.module.css'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiJest } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { DiGitBranch } from 'react-icons/di'
import { TbBrandTypescript } from 'react-icons/tb'

const Cube = () => {
  return (
    <div className={styles['cube-container']}>
      <div className={styles.cube}>
        <div className={`${styles.face} ${styles.react}`}>
          <FaReact size={140} />
        </div>
        <div className={`${styles.face} ${styles.typescript}`}>
          <TbBrandTypescript size={140} />
        </div>
        <div className={`${styles.face} ${styles.css}`}>
          <FaCss3Alt size={140} />
        </div>
        <div className={`${styles.face} ${styles.js}`}>
          <IoLogoJavascript size={140} />
        </div>
        <div className={`${styles.face} ${styles.jest}`}>
          <SiJest size={140} />
        </div>
        <div className={`${styles.face} ${styles.git}`}>
          <DiGitBranch size={140} />
        </div>
      </div>
    </div>
  )
}

export default Cube
