import React from 'react'
import { HeroCarousel } from './HeroCarousel'
import { FormInput } from './FormInput'

const Hero = () => {
  return (
      <section className='min-h-[calc(100vh-80px)] grid place-items-center h-full bg-muted'>
          <div className="container main-container h-full min-h-[(calc(100vh-80px))] grid place-items-center lg:grid-cols-2">
              <div className=''>
                  <h1 className='text-3xl md:text-5xl xl:text-6xl font-semibold tracking-wide mb-2 lg:mb-3 text-primary'>Find Everything You Need, All in One Place</h1>
                  <p className='text-gray-700 dark:text-gray-300 text-lg sm:text-xl xl:text-2xl mb-4 lg:mb-6'>Explore our curated collections of top-quality products, from electronics to sports gear. Shop smarter, live better.</p>
                  <FormInput type='text' name='search' />
              </div>
              <div className='hidden lg:block'>
                  <HeroCarousel />
              </div>
          </div>
    </section>
  )
}

export default Hero