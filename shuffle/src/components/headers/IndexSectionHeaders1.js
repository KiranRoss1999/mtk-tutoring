import React from 'react';

export default function IndexSectionHeaders1() {
    return (
        <React.Fragment>
            <>
                <section className="overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
      <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
      <nav className="relative z-50 px-9 pt-8 bg-white h-full overflow-y-auto">
        <div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block" href="#">
                  <img src="https://shuffle.dev/placeholder/logos/plain.svg?primary=006da6" alt className="h-10" />
                </a>
              </div>
              <div className="w-auto p-2">
                <a className="navbar-burger text-slate-500" href="#">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center py-16 w-full">
            <ul>
              <li className="mb-10"><a href="#" className="inline-block font-medium text-base text-gray-500 hover:text-gray-600">Products</a></li>
              <li className="mb-10"><a href="#" className="inline-block font-medium text-base text-gray-500 hover:text-gray-600">Solutions</a></li>
              <li className="mb-10"><a href="#" className="inline-block font-medium text-base text-gray-500 hover:text-gray-600">Resources</a></li>
              <li><a href="#" className="inline-block font-medium text-base text-gray-500 hover:text-gray-600">Pricing</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-end w-full pb-8">
            <div className="flex flex-wrap -m-2">
              <div className="w-full p-2">
                <a className="w-full justify-center group relative inline-flex justify-center text-center" href="#">
                  <span className="w-full justify-center relative inline-flex justify-center z-10 px-4 py-2 font-medium group-hover:text-white group-focus:text-white border border-darkorange-900 transition duration-200">Log in</span>
                  <span className="absolute top-1 left-1 w-full h-full bg-darksky-50 group-hover:bg-darkorange-500 group-focus:bg-darkorange-600 transition duration-200" />
                </a>
              </div>
              <div className="w-full p-2">
                <a className="w-full justify-center group relative inline-flex justify-center text-center" href="#">
                  <span className="w-full justify-center relative inline-flex justify-center z-10 px-4 py-2 font-medium text-white border border-darksky-900">Sign up</span>
                  <span className="absolute top-1 left-1 w-full h-full bg-darksky-500 group-hover:bg-darksky-600 group-focus:bg-darksky-700 transition duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div className="container px-4 mx-auto">
  </div>
</section>


            </>
        </React.Fragment>
    );
}

