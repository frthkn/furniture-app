import Link from "next/link";
import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  return (
<div
  id="about"
  className="max-w-[1240px] w-full h-full mx-auto p-5 my-12 md:text-center flex-col md:flex justify-center items-center"
>
  <div className="top-0">
    <p className="uppercase text-sm tracking-widest text-gray-600 py-3">
      Lorem Ipsum
    </p>
    <h1 className="py-4 text-gray-700 tracking-widest text-md">
      What is <span className="text-[#5651e5] tracking-widest text-md"> Lorem Ipsum?</span>
    </h1>
    <h1 className="py-2 text-gray-700 tracking-widest text-md">Where can I get some?</h1>
    <p className="py-4 text-gray-600 tracking-widest text-md sm:max-w-[70%] m-auto">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p>
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg  text-lg md:text-2xl text-[#0077b5] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg text-lg md:text-2xl text-[#00acee] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaTwitter />
        </div>
      </a>
      <Link href="https://tiktok.com/">
        <div className="rounded-full shadow-lg text-lg md:text-2xl text-[#3b5998] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaFacebook />
        </div>
      </Link>
      <Link href="https://instagram.com/">
        <div className="rounded-full shadow-lg text-lg md:text-2xl text-[#d62976] shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaInstagram />
        </div>
      </Link>
    </div>
  </div>
</div>

  );
};

export default About;

