import React, {Fragment} from 'react';
import {ReactComponent as Work} from '../../assets/img/work/experience.svg';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import {useMedia} from '../../hooks/useMedia';
import Container from '../Container/Container';
import Heading from '../SectionHeading/Heading';
import AccordionItem from './Accordion/AccordionItem';
import work from './db.json';
import styles from './Experience.module.css'

const Experience = () => {
  const {isDesktop, isDeskLg} = useMedia()
  const [elementRef, isIntersected] = useIntersectionObserver()

  return (
    <Container component={'section'} className={styles.experience} id={'work'}>
      <Heading
        icon={<Work/>}
        title={(isDesktop || isDeskLg) ? 'Experience' : 'Work history'}
        text={'Featured Work and Project Showcase'}
        isIntersected={isIntersected}
        ref={elementRef}
      />

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