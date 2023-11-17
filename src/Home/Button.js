import React from 'react'
import ArrowRight from '../webIcon/arrow-right.svg';
function Button({info}) {
  return (
   <button className='flex justify-center items-center px-7 py-4 border text-lg bg-coral-red text-white rounded-full'>{info}<img className=' ml-2 rounded-full w-5 h-5' src={ArrowRight} alt="arrow"  /></button>
  )
}

export default Button
