import Image from 'next/image';
import React from 'react';
import img1 from "../../assets/img/chair.jpg";
import img2 from "../../assets/img/interior.jpg";
import img3 from "../../assets/img/sofa.jpg";
import img4 from "../../assets/img/bedroom.jpg";
import img5 from "../../assets/img/living.jpg";
import img6 from "../../assets/img/lamb.jpg";
import img7 from "../../assets/img/dinningroom.jpg";
import img8 from "../../assets/img/image7.jpg";
import img9 from "../../assets/img/office.jpg";


const Categories = () => {
  return (
    <div id='categories' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest text-center pb-4 uppercase text-[#5651e5]'>
        Categories
        </p>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img1} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center uppercase'>
                <h3>chair</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img2} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center uppercase'>
                <h3>İnterior</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 uppercase'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img3} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sofa</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 uppercase'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img4} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bedroom</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 uppercase'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img5} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Livingroom</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 uppercase'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img6} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Lamb</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 uppercase'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img7} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center uppercase'>
                <h3>Dinning Room</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img8} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center uppercase'>
                <h3>Kitchen</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={img9} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center uppercase'>
                <h3>Office</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;