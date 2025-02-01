'use client'

import { FormInput } from './FormInput'
import SelectInput from './SelectInput'
import { categoriesData } from '@/utils/data'
import { Button } from './ui/button'

const Filters = ({
  sorts,
  search,
  handleSearch,
  sort,
  handleSort,
  categoryValue,
  handleCategoryValue,
  handleSubmit,
}) => {

  
  return (
    <div className='p-8 rounded-lg bg-white dark:bg-black  shadow-lg'>
      <h1 className='mb-2 lg:mb-4 font-semibold text-2xl lg:text-3xl'>Filters:</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* search */}
        <FormInput
          type='text'
          name='search'
          value={search}
          onChange={handleSearch}
        />
        {/* categories */}
        <SelectInput 
        name='categories' 
        data={categoriesData}
          defaultValue='all categories'
          value={categoryValue}
          onChange={handleCategoryValue}
         />
        {/* sorts */}
        <SelectInput 
        name='sort by' 
          data={sorts}
          defaultValue='sort by'
          value={sort}
          onChange={handleSort}
         />
        {/* clear */}
        <Button variant='destructive' className='capitalize lg:text-lg  font-semibold'>clear</Button>
        {/* submit */}
        <Button className='capitalize lg:text-lg  font-semibold bg-blue-600 hover:bg-blue-500' onClick={handleSubmit}>submit</Button>
      </div>
    </div>
  )
}

export default Filters