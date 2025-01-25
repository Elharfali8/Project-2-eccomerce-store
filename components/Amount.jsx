import { Minus, Plus } from 'lucide-react'
import React from 'react'

const Amount = () => {
  return (
      <div className='flex items-center'>
          <button type="button" className='h-10 w-10 text-lg lg:text-xl font-semibold border-primary grid place-items-center border-[2px] rounded-l text-white bg-primary'><Minus /></button>
          <span className='h-10 w-10 text-lg lg:text-xl font-semibold border-primary grid place-items-center border-[2px]'>2</span>
          <button type="button" className='h-10 w-10 text-lg lg:text-xl font-semibold border-primary grid place-items-center border-[2px] rounded-r text-white bg-primary'><Plus /></button>
    </div>
  )
}

export default Amount