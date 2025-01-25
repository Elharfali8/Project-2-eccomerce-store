import React from 'react'
import SectionTitle from './SectionTitle'
import { MainCarousel } from './MainCarousel'

const BestSellers = () => {
  return (
      <div className='py-10 lg:py-16 bg-muted'>
          <SectionTitle text='Best Sellers' />

          <div className='container main-container grid place-items-center'>
              <MainCarousel />
          </div>
    </div>
  )
}

export default BestSellers