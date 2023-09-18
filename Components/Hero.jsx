import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex max-w-6xl mx-auto m-5 py-2 px-10 items-center mt-10 p-5">
        <div className="flex lg:flex-row flex-col items-center mx-auto">
          <div className="lg:text-left text-center">
            <h1 className="sm:text-5xl text-3xl dark:text-gray-300 text-gray-800 font-bold tracking-wide">
              Experience Seamless Convenience with <br />
              Cosmo Guard
            </h1>
            <p className="text-gray-500 mt-5 text-base lg:max-w-md max-w-full tracking-wide">
              Empower your network with{" "}
              <strong className="dark:text-gray-400">Cosmo Guard</strong>, your
              gateway to a world of effortless connectivity.
            </p>

            <button className="mt-10 bg-red-500 hover:bg-white hover:text-black dark:hover:text-white dark:hover:bg-transparent border-red-600 border-2 hover:border-red-500 transition-all duration-300 text-white py-5 px-14 rounded-full text-base font-medium tracking-wide">
              Get Started
            </button>
          </div>

          <div className="lg:mt-0 mt-14">
            <Image
              src="/assets/images/connected.png"
              alt="Hero image"
              width={800}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="flex rounded-lg border dark:border-gray-700 max-w-6xl mx-auto m-5 py-6 px-16 items-center mt-20 justify-between shadow-xl flex-wrap gap-2">
        <div className="flex gap-4">
          <div className="bg-gray-200 dark:bg-slate-900 rounded-full">
            <Image
              className="saturate-150"
              src="/assets/icons/user-red.png"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h1 className="font-bold dark:text-gray-300 text-gray-800 tracking-wide">
              100,000 +
            </h1>
            <h3 className="text-gray-500 tracking-wide">Users</h3>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-gray-200 dark:bg-slate-900 rounded-full">
            <Image
              className="saturate-150"
              alt="Location"
              src="/assets/icons/location-red.png"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h1 className="font-bold dark:text-gray-300 text-gray-800 tracking-wide">
              50,000 +
            </h1>
            <h3 className="text-gray-500 tracking-wide">Locations</h3>
          </div>
        </div>

        <div className="flex gap-4 my-5">
          <div className="bg-gray-200 dark:bg-slate-900 rounded-full">
            <Image
              className="saturate-150"
              src="/assets/icons/wifi-red.png"
              width={50}
              height={40}
            />
          </div>
          <div>
            <h1 className="font-bold dark:text-gray-300 text-gray-800 tracking-wide">
              30,000 +
            </h1>
            <h3 className="text-gray-500 tracking-wide">Servers</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
