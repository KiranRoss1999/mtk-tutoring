import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <>
    <div className="w-[100vw] h-[75vh] bg-green-100 relative overflow-hidden mx-auto ">
     <Nav />
        <div className="pt-10 px-8 max-w-7xl mx-auto relative pb-64">
          
          <div className="green-box absolute hidden md:block w-full h-full bg-green-800 transform scale-75 translate-x-1/2 translate-y-20 -rotate-12 opacity-90"></div>
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col items-start w-full md:w-1/2 md:pr-16">
              <p className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black via-green-900 to-gray-400">Empowering minds, one lesson at a time...</p>
              <p className="text-lg text-green-800 mt-7">Connect with qualified tutors who understand your unique needs and goals.</p>
              <div className="flex w-full mt-7">   
              </div>
            </div>
            <div className="relative w-full md:w-1/2 flex items-center justify-center">
              <div className="absolute opacity-100">
                <img src="https://res.cloudinary.com/macxenon/image/upload/v1631562831/pngwing.com_2_xywqiv.png" alt="Decorative Image"/>
              </div>
              <img src="https://res.cloudinary.com/macxenon/image/upload/v1631562832/pngwing.com_10_d2cssf.png" alt="Decorative Image" className="relative max-w-sm md:w-96 w-full h-full"/>
            </div>
          </div>
        </div>
        </div>
      </>
  );
};

export default HomePage;
