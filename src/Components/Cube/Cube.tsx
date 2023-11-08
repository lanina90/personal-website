import React, {FC} from 'react'
import styles from './Cube.module.css'
import {FaCss3Alt, FaReact} from 'react-icons/fa'
import {SiJest} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {DiGitBranch} from 'react-icons/di'
import {TbBrandTypescript} from 'react-icons/tb'

interface CubeProps{
  isIntersecting: boolean
}

const Cube: FC<CubeProps> = ({isIntersecting}) => {
  return (
    <div className={isIntersecting ? styles.cubeIntersect : styles['cube-container']}>
      <div className={styles.cube}>
        <div
          className={isIntersecting ? `${styles.faceScale}  ${styles.reactScale}` : `${styles.face} ${styles.react}`}>
          <FaReact size={140}/>
        </div>
        <div
          className={isIntersecting ? `${styles.faceScale} ${styles.typescriptScale}` : `${styles.face} ${styles.typescript}`}>
          <TbBrandTypescript size={140}/>
        </div>
        <div
          className={isIntersecting ? `${styles.faceScale} ${styles.cssScale}` : `${styles.face} ${styles.css}`}>
          <FaCss3Alt size={50}/>
        </div>
        <div
          className={isIntersecting ? `${styles.faceScale} ${styles.jsScale}` : `${styles.face} ${styles.js}`}>
          <IoLogoJavascript size={140}/>
        </div>
        <div
          className={isIntersecting ? `${styles.faceScale} ${styles.jestScale}` : `${styles.face} ${styles.jest}`}>
          <SiJest size={140}/>
        </div>
        <div
          className={isIntersecting ? `${styles.faceScale} ${styles.gitScale}` : `${styles.face} ${styles.git}`}>
          <DiGitBranch size={140}/>
        </div>
      </div>
    </div>
  )
}

export default Cube
