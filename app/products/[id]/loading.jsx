'use client'
import { ThreeCircles } from 'react-loader-spinner'

const loading = () => {
  return (
    <div className='min-h-[calc(100vh-80px)] mt-20 grid place-items-center'><ThreeCircles
    visible={true}
    height="100"
    width="100"
    color="#f97316"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
  )
}

export default loading