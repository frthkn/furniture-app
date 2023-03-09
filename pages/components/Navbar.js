import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Dil from './Dil'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLogo from "../../assets/img/navLogo.png";
import ChangeModes from "./ChangeModes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
 

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="fixed top-0 w-full z-50 py-1 bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="70"
            height="40"
            className="cursor-pointer"
          />
        </Link>
        <input
          type="search"
          placeholder="Search.."
          autoComplete=""
          className="rounded-full w-1/3 h-[2.5rem] pl-3 border-[1px] border-gray-400"
        />
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#categories">Categories</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#products">Products</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Dil/>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
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
                <Image src={NavLogo} width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Home Decor and Design</p>
            </div>
          </div>
          <div className="py-1 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#categorie">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Categories
                </li>
              </Link>
              <Link href="/#products">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Products
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-[6rem]">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaInstagram />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaFacebook />
                  </div>
                </Link>
                <Link href="/">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaTwitter />
                  </div>
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
