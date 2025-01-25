import BestSellers from '@/components/BestSellers'
import CategoriesSection from '@/components/CategoriesSection'
import FavoriteSection from '@/components/FavoriteSection'
import Hero from '@/components/Hero'
import React from 'react'

function HomePage() {
  return (
    <main className='mt-20'>
      <Hero />
      <CategoriesSection />
      <BestSellers />
      <FavoriteSection />
    </main>
  )
}

export default HomePage