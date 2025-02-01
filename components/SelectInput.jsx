import React from 'react'
import { Label } from './ui/label'

const SelectInput = ({ 
  name,
   data,
   defaultValue,
  value,
  onChange
}) => {
  
  return (
      <div className="grid w-full items-center ">
        <Label htmlFor={name} className=" capitalize lg:text-lg">
          {name}
      </Label>
      <select name={name} className='h-[40px] bg-white px-2 border border-gray-200 rounded-lg focus:border-[2px] focus:border-primary focus:outline-none dark:bg-gray-900 dark:text-white  lg:text-lg' value={value} onChange={onChange}>
      <option value={defaultValue} className=' capitalize'>{defaultValue}</option>
        {data.map((item, index) => {
          return (
            <option className=' capitalize' value={item.title || item} key={item.id || index}>
              {item.title || item}
            </option>
          )
        })}
      </select>
      
    </div>
  )
}

export default SelectInput