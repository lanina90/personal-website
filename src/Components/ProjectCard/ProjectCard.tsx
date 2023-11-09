import React from 'react';
import Links from '../UI/Link/Links';
import styles from './ProjectCard.module.css'

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <img
          src="https://s3-alpha-sig.figma.com/img/2c61/de59/7f52b0f3f098cf9a49ab74f2092c7655?Expires=1700438400&Signature=NmmLywOAovkFfWVNtCtibGGTy7Li~Ay8oueTWuvJPkglZoIIEce80PXz9rquaFX72dcuXArj3zR7H-DZc3fa6L8RKdh~OqkvnBgPCxQX~cxpLHEWe~NfrkDGKS35hyV0oE8lHJU15OJpR4lAQPHd7ikLCLsbWnacxNhXauJMmJb9xxSn9d9X6tSw8R5A9QZgPN8vuw94sZ5oMq-DuJNtxMeGK3Rb6zOlgALne05e77u1GDEJPTmnoJu4aGEa~Fwz9t4FwWBUuWw0cYzgTS4Xj~jbof7Wwpoz8yJ9VXnfxeV1r8iQiWA5ODg8XqDvnvChiRIzZQamw0JbakA60sqV2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""/>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.title}>
            <span>01</span>
            <h3>School of walk</h3>
          </div>
          <div className={styles.text}>
            <p>Do consectetur proident proident id eiusmod deserunt consequat Do consectetur proident proident id eiusmod
              deserunt consequat Do consectetur proident proident id eiusmod deserunt consequat</p>
          </div>
          <div className={styles.stack}>
            <span>Stack:</span>
            <div className={styles.stackList} >
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
              <span>React</span>
            </div>
          </div>
        </div>
        <div className={styles.links}>
          <Links link={'/'} variant={'primary'}>Visit site</Links>
          <Links link={'/'} variant={'secondary'}>Go to Github</Links>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;