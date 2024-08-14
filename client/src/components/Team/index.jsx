import "./index.css";

export default function Team() {
    return(
        <>
        <section className="w-100vw h-auto pt-7">
        <div className="mx-auto text-center relative isolate">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Meet the team
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our expert tutors are here to guide and support you with
              personalized, passionate instruction. Get to know the faces
              dedicated to your success!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16"
          >
            <li>
              <img
                src="../../public/tim.png"
                alt="Name"
                className="max-h-[400px] object-cover object-top mx-auto w-full rounded-lg"
              />
              <div className="py-6">
                <p className="text-2xl font-semibold leading-7 tracking-tight text-black">
                  Tim Wong
                </p>
                <p className="text-lg leading-6 text-black pt-1.5">
                  Full-Stack Developer
                </p>
                <ul role="list" className="mt-4 flex gap-x-4 justify-center">
                  <li>
                    <a href="#" className="text-black hover:text-gray-700">
                      <span className="sr-only">X</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black hover:text-gray-700">
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <img
                src="../../public/mitra.jpeg"
                alt="Name"
                className="max-h-[400px] object-cover object-top mx-auto w-full rounded-lg"
              />
              <div className="py-6">
                <p className="text-2xl font-semibold leading-7 tracking-tight text-black">
                  Mitra Ahmadi 
                </p>
                <p className="text-lg leading-6 text-black pt-1.5">
                  Full-Stack Developer
                </p>
                <ul role="list" className="mt-4 flex gap-x-4 justify-center">
                  <li>
                    <a href="#" className="text-black hover:text-gray-700">
                      <span className="sr-only">X</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black hover:text-gray-700">
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <img
                src="../../public/kiran.jpg"
                alt="Name"
                className="max-h-[400px] object-cover object-top mx-auto w-full rounded-lg"
              />
              <div className="py-6">
                <p className="text-2xl font-semibold leading-7 tracking-tight text-black">
                  Kiran Ross
                </p>
                <p className="text-lg leading-6 text-black pt-1.5">
                  Full-Stack Developer
                </p>
                <ul role="list" className="mt-4 flex gap-x-4 justify-center">
                  <li>
                    <a href="#" className="text-black hover:text-gray-700">
                      <span className="sr-only">X</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black hover:text-gray-700">
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        </section>
        </>
    )
};

