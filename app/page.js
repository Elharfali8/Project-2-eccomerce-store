import CategoriesSection from '@/components/CategoriesSection'
import Hero from '@/components/Hero'
import React from 'react'

function HomePage() {
  return (
    <main className='mt-20'>
      <Hero />
      <CategoriesSection />
    </main>
  )
}

export default HomePage