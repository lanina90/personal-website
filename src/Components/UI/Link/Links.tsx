import React, {FC} from 'react';
import styles from './Links.module.css'

interface LinksProps {
  link: string;
  variant: 'primary' | 'secondary';
  children: string;

}
const Links: FC<LinksProps> = ({link, variant, children}) => {

  const linkClass = {
    primary: styles.primary,
    secondary: styles.secondary
  }

  return (
    <a href={link} target='_blank' rel='noreferrer' className={`${styles.link} ${linkClass[variant]}`}>
        {children}
    </a>
  );
};

export default Links;