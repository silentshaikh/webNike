import React from 'react';
import footImage from '../Images/footer-logo.svg';
import icn1 from '../webIcon/instagram.svg';
import icn2 from '../webIcon/facebook.svg';
import icn3 from '../webIcon/twitter.svg';

function Footer() {
    const media = [
        {
            img:icn1,
            alts:"instagram",
        },
        {
            img:icn2,
            alts:"facebook",
        },
        {
            img:icn3,
            alts:"twitter",
        },
    ]
  return (
    <footer className='bg-black text-white p-16 w-full'>
        <div className="flex justify-evenly items-center flex-wrap pb-6">
            <div className="logodetail">
                <img src={footImage} alt="footerImage" />
                <p className='mt-4 sm:max-w-md'>Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards</p>
            </div>
            <div className="">
                <h1 className='text-3xl min-[750px]:text-red-500'>Social Media</h1>
                <div className="flex justify-evenly items-center">
                    {
                        media.map((element,index) => {
                            return(
                                <img className='bg-white p-3 rounded-full cursor-pointer' key={index} src={element.img} alt={element.alts} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
        <hr />
        <p className='text-center pt-5'>©️ Copyright - <strong className='text-coral-red'>Nike</strong> - All Right Reserved</p>
    </footer>
  )
}

export default Footer
