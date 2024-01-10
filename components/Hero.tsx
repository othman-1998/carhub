'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className='hero'>

      <div className='flex-1 pt-36 padding-x'>

        <h1 className='hero__title'>
          Explore every details about every car
        </h1>
        <p className='hero__subtitle'>
        Uncover every car's essence with details and images at your fingertips.</p>

        <CustomButton 
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image 
          className='object-contain' 
          alt='hero' 
          fill 
          src="/hero.png"
          />
        </div>
        <div className='hero__image-overlay' />
      </div>

    </div>
  )
}

export default Hero