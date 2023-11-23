"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex max-w-6xl mx-auto m-5 py-2 px-10 items-center mt-28 p-5">
        <div className="flex lg:flex-row flex-col items-center mx-auto">
          <div className="lg:hidden flex lg:mt-0 mt-10">
            <Image
              alt="Hero image"
              src="/assets/images/connected.png"
              width={800}
              height={200}
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:text-left text-center mt-10"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:flex hidden lg:mt-0 mt-14"
          >
            <Image
              alt="Hero image"
              src="/assets/images/connected.png"
              width={800}
              height={200}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
