import React from 'react';
import styles from './Photo.module.css'
import Photos from '../../assets/img/me.jpg'
import {ReactComponent as Linkedin} from '../../assets/img/linkedin.svg'
import {ReactComponent as Telegram} from '../../assets/img/telegram.svg'
import {ReactComponent as GitHub} from '../../assets/img/github.svg'
import {ReactComponent as Email} from '../../assets/img/email.svg'
import {GiBoxingGloveSurprise, GiConsoleController, GiJumpingDog} from 'react-icons/gi';
import {CgGym} from 'react-icons/cg';

const Photo = () => {

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={Photos} alt="Kateryna Lanina"/>
      </div>
      <div className={styles.card__details}>
        <div>
          <h3>Soft-Skills</h3>
          <div className={styles.skills}>
           <div>
             <p>Self-organized</p>
             <p>Flexibility</p>
           </div>
            <div>
              <p>Adaptability</p>
              <p>Communication</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Hobbies</h3>
          <div className={styles.hobbies}>
            <div>
              <GiBoxingGloveSurprise size={24}/>
              <p>Boxing</p>
            </div>
            <div>
              <GiConsoleController size={24}/>
              <p>Video Games</p>
            </div>
            <div>
              <CgGym size={24}/>
              <p>Gym</p>
            </div>
            <div>
              <GiJumpingDog size={24}/>
              <p>My dog</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Contacts</h3>
          <div className={styles.contact}>
            <a href="https://www.linkedin.com/in/kateryna-lanina/"><Linkedin fill={'#000'} width={'26px'}
                                                                             height={'26px'}/></a>
            <a href="https://t.me/KaterynaLanina"><Telegram fill={'#000'} width={'26px'} height={'26px'}/></a>
            <a href="https://github.com/lanina90"><GitHub fill={'#000'} width={'26px'} height={'26px'}/></a>
            <a href="mailto:kateryna.lanina@gmail.com"><Email fill={'#000'} width={'26px'} height={'26px'}/></a>


          </div>
        </div>
      </div>


    </div>
  );
};

export default Photo;