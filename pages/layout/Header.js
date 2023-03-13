import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Dil from '../components/Dil'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/img/logo1.png";
import ChangeModes from "../components/ChangeModes";
import { useRouter } from 'next/router'
import en from "../locales/en/header"
import tr from "../locales/tr/header"



const Navbar = () => {
 
  const [nav, setNav] = useState(false);
 const router = useRouter()
 const {locale, locales, defaultLocale} = router;
 const t = locale === 'en' ? en : tr;



  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="fixed top-0 w-full z-50 py-1 bg-neutral-100 text-center text-black dark:bg-black dark:text-white">
      <div className="flex justify-between items-center w-full h-full 2xl:px-14  max-w-screen-xl mx-auto px-4 sm:px-5 lg:px-6">
        <Link href="/" >
          <Image
            src={Logo}
            width={70}
            height="auto"
            alt="/"
           
           
            className=" cursor-pointer min-w-full min-h-full"
          
          />
        </Link>
        
<form className="flex items-center">   
    <label htmlFor="voice-search" className="sr-only">Search</label>
    <div className="relative md:w-full w-1/2 mx-5">
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full pl-6 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
        <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path></svg>
        </button>
    </div>
    
</form>

        <div>
          <ul className="hidden md:flex ">
            <li className="ml-4 whitespace-nowrap text-sm uppercase hover:border-b">
              <Link href="/" className="">{t.home}</Link>
            </li>
            <li className="ml-4 text-sm uppercase hover:border-b">
              <Link href="#about">{t.about}</Link>
            </li>
            <li className="ml-4 text-sm uppercase hover:border-b">
              <Link href="#categories">{t.categroies}</Link>
            </li>
            <li className="ml-4 text-sm uppercase hover:border-b">
              <Link href="#products">{t.products}</Link>
            </li>
            <li className="ml-4 text-sm uppercase hover:border-b">
              <Link href="#contact">{t.contact}</Link>
            </li>
            <li className="ml-4 text-sm uppercase hover:border-b">
              <Dil/>
            </li>
            <li className="ml-4 ">
              <ChangeModes />
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
        
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#ecf0f3]  text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200  p-10 ease-in duration-500 z-20"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 z-20 bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200"
          }
        >
          <div >
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={Logo} width={70} height="auto" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-2">
              <p className="w-[85%] md:w-[90%] py-2">LENS TASARIM VE DEKORASYON</p>
            </div>
          </div>
          <div className="py-1 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                {t.home}
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                {t.about}
                </li>
              </Link>
              <Link href="/#categorie">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                {t.categroies}
                </li>
              </Link>
              <Link href="/#products">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                {t.products}
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                {t.contact}
                </li>
              </Link>
            </ul>
            <div className="pt-[3rem]">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center gap-1 justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/" className="rounded-full text-[#0077b5] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                </Link>
                <Link
                  href="https://instagram.com/" className="rounded-full text-[#d62976] shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  > 
                  <FaInstagram />
                
                  </Link> 
                <Link href="https://facebook.com/"
              
                    className="rounded-full shadow-lg text-[#3b5998] shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaFacebook />
                  
                </Link>
                <Link href="https://twitter.com/" 
                    className="rounded-full shadow-lg text-[#00acee] shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaTwitter />
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




