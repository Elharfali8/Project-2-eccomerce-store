'use client'

import Filters from '@/components/Filters'
import { MainCard } from '@/components/MainCard'
import { data } from '@/utils/data'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductsPage = () => {
  const { isLoading, products, sortBy } = useSelector((store) => store.products)
  

  return (
      <main className='mt-20 min-h-[calc(100vh-80px)] bg-muted'>
          <div className="container main-container py-12 lg:py-16">
              <Filters sortBy={sortBy} />
        <div className='my-6 lg:my-10'>
          <div className='flex items-center justify-between gap-x-4'>
            <p className='text-lg lg:text-xl capitalize font-semibold flex items-center'>
              products: <span className='text-primary pl-2'>22</span>
            </p>
            <div className='w-full h-[2px] bg-black dark:bg-gray-400' />
            </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => {
              return <MainCard key={item.asin} {...item} />
            })}
        </div>
          </div>
    </main>
  )
}

export default ProductsPage