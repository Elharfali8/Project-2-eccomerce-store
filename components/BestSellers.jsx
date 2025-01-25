import React from 'react'
import SectionTitle from './SectionTitle'
import { MainCarousel } from './MainCarousel'
import { Button } from './ui/button'
import Link from 'next/link'

const BestSellers = () => {
  return (
      <div className='py-10 lg:py-16 bg-muted'>
          <SectionTitle text='Best Sellers' />

          <div className='container main-container grid place-items-center'>
              <MainCarousel />
      </div>
      <div className='mt-6 lg:mt-10 grid place-items-center'>
        <Button asChild className='px-12'>
          <Link href={`/deals`} className='text-xl lg:text-2xl capitalize'>
            see more
          </Link>
          </Button>
      </div>
    </div>
  )
}

export default BestSellers