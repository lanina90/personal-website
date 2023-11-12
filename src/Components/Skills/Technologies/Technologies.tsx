import React from 'react';
import {DiGitBranch} from 'react-icons/di';
import {FaCss3Alt, FaReact, FaSass} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiJest, SiMui, SiRedux, SiTailwindcss, SiTypescript} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';
import {TiHtml5} from 'react-icons/ti';
import styles from '../Skills.module.css';

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <div className={styles.card}>
        <FaReact size={100}/>
        <span>React</span>
      </div>
      <div className={styles.card}>
        <SiRedux size={100}/>
        <span>Redux</span>
      </div>
      <div className={styles.card}>
        <SiTypescript size={100}/>
        <span>TypeScript</span>
      </div>
      <div className={styles.card}>
        <FaCss3Alt size={140}/>
        <span>CSS</span>
      </div>
      <div className={styles.card}>
        <FaSass size={140}/>
        <span>SASS</span>
      </div>
      <div className={styles.card}>
        <TiHtml5 size={140}/>
        <span>HTML5</span>
      </div>

      <div className={styles.card}>
        <IoLogoJavascript size={140}/>
        <span>JavaScript</span>
      </div>
      <div className={styles.card}>
        <SiJest size={140}/>
        <span>Jest</span>
      </div>
      <div className={styles.card}>
        <TbBrandNextjs size={140}/>
        <span>NextJs</span>
      </div>
      <div className={styles.card}>
        <SiTailwindcss size={140}/>
        <span>TailwindCSS</span>
      </div>
      <div className={styles.card}>
        <DiGitBranch size={140}/>
        <span>GIT</span>
      </div>
      <div className={styles.card}>
        <SiMui size={140}/>
        <span>MUI</span>
      </div>

    </div>
  );
};

export default Technologies;