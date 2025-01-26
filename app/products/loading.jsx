import { SkeletonCard } from '@/components/SkeletonCard'
import React from 'react'

const loading = () => {

  return (
      <div className='min-h-[calc(100vh-80px)] mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
    </div>
  )
}

export default loading