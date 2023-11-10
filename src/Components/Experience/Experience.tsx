import React, {Fragment} from 'react';
import {ReactComponent as Work} from '../../assets/img/work/experience.svg';
import {useMedia} from '../../hooks/useMedia';
import Container from '../Container/Container';
import Heading from '../SectionHeading/Heading';
import AccordionItem from './Accordion/AccordionItem';
import work from './db.json';
import styles from './Experience.module.css'

const Experience = () => {
  const {isDesktop, isDeskLg} = useMedia()
  return (
    <Container component={'section'} className={styles.experience}>
      <Heading
        icon={<Work/>}
        title={(isDesktop || isDeskLg) ? 'Experience' : 'Work history'}
        text={'Featured Work and Project Showcase'}/>

      {work.map(item =>
        <Fragment key={item.id}>
          <AccordionItem
            position={item.position}
            company={item.company}
            period={item.period}
            duties={item.duties}
          />
        </Fragment>
      )}

    </Container>
  );
};

export default Experience;