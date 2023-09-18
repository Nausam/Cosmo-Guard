"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Offers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section id="features" className="w-full">
      <div className="flex max-w-6xl mx-auto justify-between mt-10">
        <div className="flex lg:flex-row flex-col lg:justify-between mx-auto items-center justify-center lg:text-left text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:ml-20 lg:max-w-lg max-w-md"
          >
            <h1 className="md:text-4xl text-2xl md:max-w-full max-w-md font-medium dark:text-gray-300 tracking-wide">
              Discover Our <br className="hidden lg:block" />
              Abundance of Features
            </h1>
            <h3 className="mt-5 text-gray-500 tracking-wide">
              Explore the wide range of features we offer, each designed to
              provide unique functionality.
            </h3>

            <div className="flex flex-col ml-5 mt-5 items-start">
              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">Secure Data Encryption.</p>
              </div>

              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">Anonymous Browsing.</p>
              </div>

              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">Multiple Server Locations</p>
              </div>

              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">High-Speed Connections</p>
              </div>

              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">Multi-Device Support</p>
              </div>

              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">Split Tunneling</p>
              </div>

              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">Ad Blockings</p>
              </div>

              <div className="py-2 text-gray-500 flex gap-2 items-center">
                <div>
                  <Image
                    alt="Tick circle"
                    src="/assets/icons/tick-circle.png"
                    width={20}
                    height={20}
                  />
                </div>
                <p className="tracking-wide">Kill Switch</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:mb-0 mb-10 p-10"
          >
            <Image
              alt="Discover image"
              src="/assets/images/discover.png"
              width={600}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
