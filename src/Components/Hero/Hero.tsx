import React from 'react'
import {useMedia} from '../../hooks/useMedia';
import HeroMob from './HeroMob/HeroMob';
import HeroDesc from './HeroDesc/HeroDesc';


const Hero = () => {

  const {isMobile} = useMedia()

  return (
    <>
      {isMobile ? <HeroMob/> : <HeroDesc/>}
    </>
  )
}

export default Hero
