import React, { useState } from 'react'
import shoeOne from '../Images/big-shoe1.png';
import shoeTwo from '../Images/big-shoe2.png';
import shoeThree from '../Images/big-shoe3.png';

function ShoeCard({imgLink,changeImg,shoeImg}) {
    
   const imgUpdate = () => {
    if(shoeImg !== imgLink.img){
        changeImg(imgLink.img);
    } 
   }
  return (
    <div className={`border-2 rounded-xl p-2 ${shoeImg === imgLink.img ? 'border-teal-400 ' : 'border-transparent'} cursor-pointer  max-sm:flex-1 `} onClick={imgUpdate}>
      <div className='flex justify-center items-center'>
        <img src={imgLink.thumb} alt="cardsImage" />
      </div>
    </div>
  )
}

export default ShoeCard;
