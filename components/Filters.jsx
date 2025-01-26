'use client'

import { FormInput } from './FormInput'
import SelectInput from './SelectInput'
import { categoriesData } from '@/utils/data'
import { Button } from './ui/button'

const Filters = ({sortBy}) => {

  
  return (
    <div className='p-8 rounded-lg bg-white dark:bg-black  shadow-lg'>
      <h1 className='mb-2 lg:mb-4 font-semibold text-2xl lg:text-3xl'>Filters:</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* search */}
        <FormInput type='text' name='search' />
        {/* categories */}
        <SelectInput name='categories' data={categoriesData} />
        {/* sortBy */}
        <SelectInput name='sort by' data={sortBy} />
        {/* clear */}
        <Button variant='destructive' className='capitalize lg:text-lg  font-semibold'>clear</Button>
        {/* submit */}
        <Button className='capitalize lg:text-lg  font-semibold bg-blue-600 hover:bg-blue-500'>submit</Button>
      </div>
    </div>
  )
}

export default Filters