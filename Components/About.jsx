"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="about" className="w-full">
      <div className="flex max-w-6xl mx-auto justify-between mt-10">
        <div className="flex lg:flex-row flex-col lg:justify-between mx-auto items-center justify-center lg:text-left text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:mb-0 mb-10 p-10"
          >
            <img
              alt="About image"
              src="/assets/images/about.png"
              width={600}
              height={600}
            />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:ml-20 lg:max-w-lg max-w-full"
          >
            <h1 className="md:text-4xl text-2xl md:max-w-full max-w-md font-medium dark:text-gray-300 tracking-wide">
              Why Choose Us?
            </h1>
            <h3 className="mt-5 text-gray-500 tracking-wide md:max-w-2xl max-w-sm">
              At Cosmo Guard, we're dedicated to your online privacy and
              security. With cutting-edge encryption and a global network of
              servers, we empower you to browse, stream, and work with
              confidence. Say goodbye to restrictions and hello to a safe and
              borderless internet experience. Trust in Cosmo Guard for all your
              online adventures.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
