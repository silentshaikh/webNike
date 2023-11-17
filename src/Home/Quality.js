import React from 'react'
import Button from './Button';
import QualImage from '../Images/shoe8.svg';
function Quality({head}) {
  return (
   <section className='p-20 flex justify-evenly items-center max-lg:flex-col max-container'>
    <div className="flex flex-col justify-start item-center">
        <h1 className='text-4xl font-bold text-coral-red'>{head}</h1>
        <p className='lg:max-w-lg mt-4'>Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance</p>
          <p className='mt-4'>Our dedication to detail and excellence ensures your satisfaction</p>
          <div className='mt-3 mb-2'><Button info='View Detail'/></div>
    </div>
    <div className="flex">
    <img className='w-96' src={QualImage} alt="qualityImage" />
    </div>
   </section>
  )
}

export default Quality
