import React from 'react';

export default function LoginSectionSignIn1() {
    return (
        <React.Fragment>
            <>
                <section className="overflow-hidden">
  <div className="flex flex-wrap">
    <div className="w-full md:w-1/2">
      <div className="flex items-center py-24 px-4 md:px-8 h-full bg-white">
        <div className="text-center max-w-xl mx-auto">
          <h4 className="font-heading mb-5 text-3xl font-semibold">I have never had a better tutor than Tim - he helped me get straight A's on all of my exams, he knows his stuff!</h4>
          <div className="mb-4 mx-auto max-w-max">
            <div className="relative inline-flex">
              <svg className="mx-auto" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9467 16.9467C22.2539 15.9182 23.208 14.5079 23.6763 12.9119C24.1446 11.316 24.1039 9.61371 23.5597 8.04198C23.0155 6.47025 21.995 5.10721 20.6401 4.1425C19.2852 3.17778 17.6633 2.65936 16 2.65936C14.3367 2.65936 12.7148 3.17778 11.3599 4.1425C10.005 5.10721 8.98446 6.47025 8.44028 8.04198C7.8961 9.61371 7.85535 11.316 8.32368 12.9119C8.79201 14.5079 9.74614 15.9182 11.0533 16.9467C8.81343 17.8441 6.85905 19.3325 5.39852 21.2532C3.93799 23.174 3.02608 25.4551 2.76 27.8534C2.74074 28.0285 2.75615 28.2056 2.80536 28.3748C2.85457 28.5439 2.93662 28.7017 3.04681 28.8391C3.26935 29.1167 3.59304 29.2945 3.94666 29.3334C4.30028 29.3723 4.65488 29.2691 4.93243 29.0465C5.20998 28.824 5.38776 28.5003 5.42666 28.1467C5.71944 25.5403 6.96224 23.1331 8.91762 21.3851C10.873 19.6371 13.4039 18.6707 16.0267 18.6707C18.6495 18.6707 21.1803 19.6371 23.1357 21.3851C25.0911 23.1331 26.3339 25.5403 26.6267 28.1467C26.6629 28.4743 26.8192 28.7769 27.0655 28.996C27.3117 29.2152 27.6304 29.3354 27.96 29.3334H28.1067C28.4562 29.2931 28.7756 29.1164 28.9954 28.8417C29.2152 28.567 29.3175 28.2165 29.28 27.8667C29.0127 25.4616 28.0958 23.1747 26.6278 21.251C25.1598 19.3273 23.1959 17.8393 20.9467 16.9467ZM16 16C14.9452 16 13.914 15.6872 13.037 15.1012C12.1599 14.5152 11.4763 13.6822 11.0726 12.7077C10.669 11.7331 10.5634 10.6608 10.7691 9.62621C10.9749 8.59164 11.4829 7.64133 12.2288 6.89545C12.9746 6.14957 13.9249 5.64162 14.9595 5.43584C15.9941 5.23005 17.0664 5.33567 18.041 5.73933C19.0155 6.143 19.8485 6.82659 20.4345 7.70365C21.0205 8.58071 21.3333 9.61186 21.3333 10.6667C21.3333 12.0812 20.7714 13.4377 19.7712 14.4379C18.771 15.4381 17.4145 16 16 16Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <h6 className="font-heading text-xl font-semibold">Emma Smith</h6>
          <p className="text-sm text-gray-500 font-medium">Computer Science - Harvard University</p>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2">
      <div className="max-w-md mx-auto py-24 md:py-44 px-4 md:px-8">
        <h3 className="mb-5 text-3xl text-gray-500 font-semibold">Sign In</h3>
        <p className="mb-8 text-base text-gray-300 font-medium">Welcome back! Ready to find your perfect tutor and achieve your learning goals? Sign in to book your next session now!</p>
        <form action="#">
          <div className="flex flex-wrap -m-3">
            <div className="w-full p-3">
              <label htmlFor="default-label-1" className="mb-2 inline-block text-xs text-gray-300 font-medium">First Name</label>
              <input id="default-label-1" type="text" placeholder="First Name" className="flex w-full px-4 py-3 text-base font-medium disabled:bg-white placeholder-gray-500 disabled:placeholder-gray-300 outline-none border border-darksky-900 active:border-darksky-600 disabled:border-gray-200" />
            </div>
            <div className="w-full p-3">
              <label htmlFor="default-label-2" className="mb-2 inline-block text-xs text-gray-300 font-medium">Password</label>
              <input id="default-label-2" type="password" placeholder="Password" className="flex w-full px-4 py-3 text-base font-medium disabled:bg-white placeholder-gray-500 disabled:placeholder-gray-300 outline-none border border-darksky-900 active:border-darksky-600 disabled:border-gray-200" />
            </div>
            <div className="w-full p-3">
              <div className="flex flex-wrap items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <div className="flex items-start">
                    <div className="mr-2">
                      <input id="custom-checkbox5" type="checkbox" name="confirm" defaultValue="yes" className="get(checkbox-form.class)" />
                    </div>
                    <label htmlFor="custom-checkbox5" className="text-sm text-gray-500 font-medium">Remember me</label>
                  </div>
                </div>
                <div className="w-auto p-2"><a href="#" className="inline-block font-medium text-sm text-gray-500 hover:text-gray-600">Forgot Password</a></div>
              </div>
            </div>
            <div className="w-full p-3">
              <div className="mb-4">
                <a href="#" className="group relative flex justify-center w-full text-center">
                  <span className="relative z-10 flex justify-center w-full px-4 py-3 font-medium text-white border border-darksky-900">Sign In</span>
                  <span className="absolute top-1 left-1 w-full h-full bg-darksky-500 group-hover:bg-darksky-600 group-focus:bg-darksky-700 transition duration-200" />
                </a>
              </div>
              <div className="mb-3">
                <a href="#" className="group relative flex justify-center w-full text-center">
                  <span className="absolute top-1 left-1 w-full h-full bg-darksky-50 group-hover:bg-darksky-100 group-focus:bg-darksky-100 transition duration-200" />
                </a>
              </div>
              <div className="mb-3">
                <a href="#" className="group relative flex justify-center w-full text-center">
                  <span className="absolute top-1 left-1 w-full h-full bg-darksky-50 group-hover:bg-darksky-100 group-focus:bg-darksky-100 transition duration-200" />
                </a>
              </div>
              <div className="mb-8">
                <a href="#" className="group relative flex justify-center w-full text-center">
                  <span className="absolute top-1 left-1 w-full h-full bg-darksky-50 group-hover:bg-darksky-100 group-focus:bg-darksky-100 transition duration-200" />
                </a>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 font-medium">Don’t have an account? <a href="#signup" className="inline-block text-sm text-gray-700 hover:text-gray-900 font-semibold">Sign up</a></p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

