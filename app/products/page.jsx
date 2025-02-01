'use client'

import Filters from '@/components/Filters'
import { MainCard } from '@/components/MainCard'
import { SkeletonCard } from '@/components/SkeletonCard'
import { fetchProducts, setSearchQuery } from '@/features/products/productsSlice'
import { data } from '@/utils/data'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProductsPage = () => {
  const { isLoading, sorts, products} = useSelector((store) => store.products)
  const dispatch = useDispatch()

  const [search, setSearch] = useState('')
  const [categoryValue, setCategoryValue] = useState('')
  const [sort, setSort] = useState('')



  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }

  const handleCategoryValue = (e) => {
    const value = e.target.value
    setCategoryValue(value)
  }

  const handleSort = (e) => {
    const value = e.target.value
    setSort(value)
  }

  const handleSubmit = () => {
    dispatch(setSearchQuery(search))
  }
  

  useEffect(() => {
    dispatch(fetchProducts({ searchQuery: search, sortBy:sort }))
  }, [])
  

  return (
      <main className='mt-20 min-h-[calc(100vh-80px)] bg-muted'>
          <div className="container main-container py-12 lg:py-16">
        <Filters
          sorts={sorts}
          search={search}
          handleSearch={handleSearch}
          sort={sort}
          handleSort={handleSort}
          categoryValue={categoryValue}
          handleCategoryValue={handleCategoryValue}
          handleSubmit={handleSubmit}
        />
        <div className='my-6 lg:my-10'>
          <div className='flex items-center justify-between gap-x-4'>
            <p className='text-lg lg:text-xl capitalize font-semibold flex items-center'>
              products: <span className='text-primary pl-2'>{products?.length}</span>
            </p>
            <div className='w-full h-[2px] bg-black dark:bg-gray-400' />
            </div>
        </div>
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products?.map((item) => {
              return <MainCard key={item.asin || item.product_asin} {...item} />
            })}
        </div>
        )}
          </div>
    </main>
  )
}

export default ProductsPage