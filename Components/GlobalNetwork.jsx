"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const GlobalNetwork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mt-36"
      >
        <h1 className="font-medium text-4xl md:max-w-full max-w-md mx-auto dark:text-gray-300 tracking-wide">
          Extensive Global Network of High-Speed VPN Servers
        </h1>
        <h3 className="text-gray-500 mt-5 md:max-w-2xl max-w-sm mx-auto tracking-wide">
          Experience the <strong>Cosmo Guard</strong> widespread network,
          ensuring seamless connectivity as you travel and change locations.
        </h3>
      </motion.div>
      <div className="flex flex-col max-w-6xl mx-auto m-5 py-2 px-10 items-center mt-20 p-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex w-full items-center justify-center"
        >
          <Image
            alt="World map"
            width={800}
            height={600}
            src="/assets/images/global.png"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
