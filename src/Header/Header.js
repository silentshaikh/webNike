import React from 'react'
import Logo from '../Images/header-logo.svg'; 
import Hamb from '../webIcon/hamburger.svg'
import { NavLink } from 'react-router-dom';
function Header() {
 const webLinks = [
        { href: "/", label: "Home" },
        { href: "/product", label: "Products" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];
  return (
   <>
    <header className='padding-x py-8 sticky top-0 z-10  w-full bg-white' >
        <nav className='flex justify-between items-center max-container'>
    <a href="/">
        <img src={Logo} alt="logo" />
    </a>
    <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
    {
        webLinks.map((element,index) => {
            return(
    <li key={index}><NavLink to={element.href} className='leading-normal text-lg text-slate-gray '>{element.label}</NavLink></li>

            );
        })
    }
    </ul>
    <div className="hidden max-lg:block">
        <img src={Hamb} alt="hamburger" className='w-8  ' />
    </div>
        </nav>
    </header>
   </>
  )
}

export default Header
