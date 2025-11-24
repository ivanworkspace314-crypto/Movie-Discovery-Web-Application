import React from 'react'
import heroImage from '../assets/images/hero.png'

const BackgroundHero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-center">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default BackgroundHero