"use client";
import Dropdownone from "./Dropdownone";
import Dropdowntwo from "./Dropdowntwo";

const Banner = () => {
  return (
    <main className="banner-image">
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl pt-16 sm:pt-40 sm:pb-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-75px md:4px">
              Transforming businesses <br /> with modern technology <br /> and
              consulting
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
              Empowering businesses with tailored software solutions, expert
              consulting, and cutting-edge technologies to drive growth and
              innovation.
            </p>
          </div>

          <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
              <div className="col-span-3">
                <Dropdownone />
              </div>
              <div className="col-span-3">
                <Dropdowntwo />
              </div>
              <div className="flex items-center justify-center col-span-3 sm:col-span-2 mt-2 bg-purple w-full hover:bg-purple text-white font-bold py-4 px-3 rounded">
                <a href="#footer-section">Start</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
