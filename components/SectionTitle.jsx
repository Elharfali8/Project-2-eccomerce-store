import React from 'react'

const SectionTitle = ({text}) => {
  return (
      <div className='mb-8 lg:mb-16 container main-container grid place-items-center text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wide capitalize'>
          <h1 className='border-b-[3px] border-primary pb-1 md:pb-2'>{text}</h1>
      </div>

  )
}

export default SectionTitle