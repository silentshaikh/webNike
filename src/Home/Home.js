import React,{useState} from 'react'
import Button from './Button'
import shoeOne from '../Images/big-shoe1.png';
import shoeTwo from '../Images/big-shoe2.png';
import shoeThree from '../Images/big-shoe3.png';
import thumdOne from '../Images/thumbnail-shoe1.svg';
import thumdTwo from '../Images/thumbnail-shoe2.svg';
import thumdThree from '../Images/thumbnail-shoe3.svg';
import ShoeCard from './ShoeCard';
import Quality from './Quality';
import Offer from './Offer';
function Home() {
    const [shoeImg,updShoeImg] = useState(shoeOne);
     const ourStat = [
        { value: '1k+', label: 'Brands' },
        { value: '500+', label: 'Shops' },
        { value: '250k+', label: 'Customers' },
    ];
    const shoeObj = [
        {
            img: shoeOne,
        thumb: thumdOne
        },
        {
            img: shoeTwo,
        thumb: thumdTwo
        },
        {
            img: shoeThree,
        thumb: thumdThree
        },
    ];
  return (
    <>
        <section className=' flex xl:flex-row flex-col justify-evenly min-h-screen gap-10 max-container'>
            <div className='xl:w-2/5  flex flex-col justify-center pl-10 items-start w-full max-lg:padding-x pt-20'>
            <p className='text-lg text-coral-red  '>Our Winter Collection</p>
            <h1 className='font-bold text-8xl mt-10 max-md:text-[5rem] xl:bg-white xl:whitespace-nowrap'>The New Arrival</h1>
            <h1 className='font-bold text-8xl mb-5 max-md:text-[5rem]'><span className='text-coral-red'>Nike</span> Shoes</h1>
            <p className='mb-5 '>Discover Stylish Nike Arrivals, Quality Comfort and Annovation for your Active Life</p>
            <Button info='Shop Now'/>
            <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-16">
            {
                ourStat.map((element,index) => {
                    return(
                        <div key={index}>
                        <p className='text-3xl font-bold text-coral-red'>{element.value}</p>
                        <p>{element.label}</p>
                        </div>
                    );
                })
            }
            </div>
            </div>
            <div className="flex flex-1 justify-center items-center flex-col">
            <img width={570} height={500} src={shoeImg} alt="product" />
            <div className='flex justify-evenly items-center mt-10'>
                {shoeObj.map((element,index) => {
                    return(
                        <div key={index} className='shadow-3xl p-3 ml-2'>
                        <ShoeCard imgLink={element} changeImg={(element) => { updShoeImg(element)}} shoeImg={shoeImg}/>
                        </div>
                    );
                })}
            </div>
            </div>
        </section>
        <Quality head='We Provide You Super Quality Shoes'/>
        <Offer head='Avail Special Offer'/>
    </>
  )
}

export default Home
