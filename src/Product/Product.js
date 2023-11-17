import React from 'react'
import shoePro1 from '../Images/shoe4.svg';
import shoePro2 from '../Images/shoe5.svg';
import shoePro3 from '../Images/shoe6.svg';
import shoePro4 from '../Images/shoe7.svg';
import star from '../webIcon/star.svg';
function Product() {
  const products = [
    {
        imgURL: shoePro1,
        name: "Nike Air Jordan-01",
        price: "$100.20",
    },
    {
        imgURL: shoePro2,
        name: "Nike Air Jordan-10",
        price: "$110.20",
    },
    {
        imgURL: shoePro3,
        name: "Nike Air Jordan-100",
        price: "$120.20",
    },
    {
        imgURL: shoePro4,
        name: "Nike Air Jordan-001",
        price: "$420.20",
    },
];
  return (
    <section className='max-container max-sm:mt-12'>
      <div className="flex flex-col justify-start gap-5 p-5">
    <h1 className='text-coral-red text-4xl font-bold'>Our Product</h1>
    <p className='font-bold text-gray-500 '>Discover Stylish Nike Arrivals, Quality Comfort and Annovation for your Active Life</p>
      </div>
      <div className="flex justify-evenly items-center flex-wrap pt-5">
      {products.map((element,index) => {
        return(
          <div key={index} className="flex justify-center items-center flex-col shadow-lg p-3 mb-16 rounded-md">
          <img src={element.imgURL} alt="product" />
          <div className="flex items-center py-3">
          <img src={star} alt="star" />
          <p className='pl-5'>(2.4)</p>
          </div>
          <p className='font-bold'>{element.name}</p>
          <p className='text-coral-red'>{element.price}</p>
        </div>
        );
      })}
      </div>
    </section>
  )
}

export default Product
