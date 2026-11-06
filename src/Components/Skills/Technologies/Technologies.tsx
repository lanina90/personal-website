import {ReactNode} from 'react';
import {DiGitBranch} from 'react-icons/di';
import {FaCss3Alt, FaReact, FaSass} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiChakraui, SiJest, SiMui, SiReactquery, SiRedux, SiTailwindcss, SiTypescript} from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';
import {TiHtml5} from 'react-icons/ti';
import {ReactComponent as ZustandIcon} from '../../../assets/img/skills/zustand.svg';
import styles from '../Skills.module.css';

const TECHNOLOGIES: { name: string; icon: ReactNode }[] = [
  {name: 'NextJs', icon: <TbBrandNextjs size={140}/>},
  {name: 'React', icon: <FaReact size={100}/>},
  {name: 'TypeScript', icon: <SiTypescript size={100}/>},
  {name: 'JavaScript', icon: <IoLogoJavascript size={140}/>},
  {name: 'TanStack', icon: <SiReactquery size={140}/>},
  {name: 'Zustand', icon: <ZustandIcon width={140} height={140}/>},
  {name: 'Redux', icon: <SiRedux size={100}/>},
  {name: 'CSS', icon: <FaCss3Alt size={140}/>},
  {name: 'SASS', icon: <FaSass size={140}/>},
  {name: 'TailwindCSS', icon: <SiTailwindcss size={140}/>},
  {name: 'MUI', icon: <SiMui size={140}/>},
  {name: 'Chakra UI', icon: <SiChakraui size={140}/>},
  {name: 'HTML5', icon: <TiHtml5 size={140}/>},
  {name: 'Jest', icon: <SiJest size={140}/>},
  {name: 'GIT', icon: <DiGitBranch size={140}/>},
];

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      {TECHNOLOGIES.map(({name, icon}) => (
        <div key={name} className={styles.card}>
          {icon}
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
};

export default Technologies;
