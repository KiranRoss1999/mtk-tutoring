import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';



const HomePage = () => {
  return (
    <div>  
     <nav className="w-full">
        <div className="md:hidden mobile-menu">
          <div className="flex flex-col">
            <button className="h-9 w-24 text-gray-600 bg-white border-2 border-white flex items-center justify-center text-lg font-normal mt-2 mx-auto rounded-lg">
              Sign in
            </button>
            <Link to="/signup">
              <button className="h-9 w-24 text-white bg-blue-700 hover:bg-blue-900 border-2 border-blue-700 flex items-center justify-center text-lg font-normal mt-2 mx-auto rounded-lg">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-white text-black relative isolate">
        <span className="absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(100%_100%_at_bottom_center,white,transparent)]">
            <svg>
            <defs>
              <pattern id="a-new-header02" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(12)">
                <rect x="0" y="0" width="100%" height="100%" fill="hsla(0,0%,100%,1)"/>
                <path d="M15 5h10v30H15zM35-5V5H5V-5zM35 35v10H5V35zM35-15h10v30H35zM55 15v10H25V15zM15 15v10h-30V15zM35 25h10v30H35zM-5 25H5v30H-5zM-5-15H5v30H-5z" strokeWidth="0.1" className="stroke-gray-900" fill="none"/>
              </pattern>
            </defs>
            <rect width="800%" height="800%" fill="url(#a-new-header02)"/>
            </svg>
        </span>
        <header className="w-[100vw] absolute inset-x-0 top-0 z-50">
          <div role="dialog" aria-modal className="hidden">
            <div className="fixed inset-0 z-50"></div>
            <div className="w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 fixed inset-y-0 right-0 z-50 overflow-y-auto">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">OUR LOGO</span>
                  <img src="src\assets\simple-assets\logos\logo.svg" alt="Logo" className="h-8 w-auto"/>
                </a>
                <button type="button" className="font-normal text-gray-700 rounded-md p-2.5">
                  <span className="sr-only">Close menu</span>
                  <span className="inline-flex items-center justify-center h-6 w-6">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6 space-y-2">
                    <a href="#" className="block px-3 py-2 text-xl font-bold text-black rounded-lg hover:bg-gray-50">Product</a>
                    <a href="#" className="block px-3 py-2 text-xl font-bold text-black rounded-lg hover:bg-gray-50">Chapters</a>
                    <a href="#" className="block px-3 py-2 text-xl font-bold text-black rounded-lg hover:bg-gray-50">Features</a>
                    <a href="#" className="block px-3 py-2 text-xl font-bold text-black rounded-lg hover:bg-gray-50">Pricing</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="block px-3 py-2.5 text-xl font-bold text-black rounded-lg hover:bg-gray-50">Get Access</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>

      <div className="w-[100vw] h-[100vh] bg-green-100 relative overflow-hidden mx-auto ">
     <Nav />
        <div className="pt-10 px-8 max-w-7xl mx-auto relative">
          <div className="absolute top-0 right-0 hidden md:block w-full h-full bg-green-800 transform scale-90 translate-x-1/2 translate-y-20 -rotate-12 opacity-90"></div>
          <div className="flex flex-col items-center md:flex-row">
            <div className="flex flex-col items-start w-full md:w-1/2 md:pr-16">
              <p className="text-sm font-medium bg-green-800 text-white rounded-md px-3 py-1.5">Starting at a low $49.99!</p>
              <p className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-black via-green-900 to-gray-400">Empowering minds, one lesson at a time...</p>
              <p className="text-lg text-green-800 mt-7">Connect with qualified tutors who understand your unique needs and goals.</p>
              <div className="flex w-full mt-7">
                <a href="#_" className="w-full text-lg text-green-800 bg-green-100 border-2 border-green-100 rounded-lg text-center py-2 px-5 md:w-auto">Get Started</a>
                <a href="#_" className="w-full text-lg text-green-800 bg-green-100 border-2 border-green-100 rounded-lg text-center py-2 px-5 md:w-auto ml-2">Learn More</a>
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
    </div>
  );
};

export default HomePage;
