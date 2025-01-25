import React from 'react'
import SectionTitle from './SectionTitle'
import { Button } from './ui/button'
import Link from 'next/link'

const FavoriteSection = () => {
    const isLogin = false


  return (
    <div className='py-10 lg:py-16 '>
          <SectionTitle text='favorite products' />

          <div className='container main-container grid place-items-center'>
              {!isLogin && (
                  <div className='grid place-items-center'>
                      <p className="text-lg md:text-xl lg:text-2xl mb-4 text-center">
                            Please log in to view and manage your favorite products.
                      </p>
                      <div className='mt-2 lg:mt-4 flex items-center justify-between'>
                              <Link href={`/register`} className='text-xl lg:text-2xl capitalize text-primary font-medium pb-1 border-[2px] border-primary px-4 py-1 rounded transition-all ease-in-out duration-150 hover:text-white hover:bg-primary'>
                                Login or Sign up
                              </Link>
                      </div>
                  </div>
              )}
          </div>
          </div>
  )
}

export default FavoriteSection