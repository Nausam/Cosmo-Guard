import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full">
      <div className="text-center mt-28">
        <h1 className="font-medium text-3xl md:max-w-full max-w-md mx-auto dark:text-gray-300 tracking-wide">
          Trusted by Thousands of Satisfied Customers
        </h1>
        <h3 className="text-gray-500 mt-5 md:max-w-2xl max-w-md mx-auto tracking-wide">
          Read the testimonials of those who have enthusiastically embraced our
          remarkable features and services.
        </h3>
      </div>
      <div className="flex flex-col max-w-6xl mx-auto m-5 py-2 px-10 items-center mt-5 p-5">
        <div className="flex w-full items-center justify-center p-10 gap-5 flex-wrap dark:bg-transparent bg-gray-100 rounded-lg">
          <div className="border-2 border-gray-500 hover:border-red-500 md:w-[410px] w-[330px] h-[225px] rounded-md p-5 dark:bg-transparent bg-white">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                alt="Irofile image"
                width={50}
                height={50}
                src="/assets/images/profile1.png"
              />
              <div>
                <h2 className="font-medium dark:text-gray-300 tracking-wide">
                  Yessica Christy
                </h2>
                <div className="flex md:space-x-40 space-x-14">
                  <p className="text-gray-500 text-sm tracking-wide">China</p>
                </div>
              </div>
            </div>
            <p className="mt-3 md:text-base text-sm dark:text-gray-400 tracking-wide">
              "I've been using this service for a while now, and I'm incredibly
              impressed. It's not only user-friendly but also highly efficient.
              I can't recommend it enough!"
            </p>
          </div>

          <div className="border-2 border-gray-500 hover:border-red-500 md:w-[410px] w-[330px] h-[225px] rounded-md p-5 bg-white dark:bg-transparent">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                alt="Profile image"
                width={50}
                height={50}
                src="/assets/images/profile2.webp"
              />
              <div>
                <h2 className="font-medium dark:text-gray-300 tracking-wide">
                  Kim Young Jou
                </h2>
                <div className="flex md:space-x-32 space-x-12">
                  <p className="text-gray-500 text-sm tracking-wide">Korea</p>
                </div>
              </div>
            </div>
            <p className="mt-3 md:text-base text-sm dark:text-gray-400 tracking-wide">
              "This product has truly transformed the way I work. It's made
              everything so much easier and faster. I'm extremely happy with the
              results."
            </p>
          </div>

          <div className="border-2 border-gray-500 hover:border-red-500 md:w-[410px] w-[330px] h-[225px] rounded-md p-5 bg-white dark:bg-transparent">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                alt="Profile image"
                width={50}
                height={50}
                src="/assets/images/profile3.png"
              />
              <div>
                <h2 className="font-medium dark:text-gray-300 tracking-wide">
                  Warsaw, Poland
                </h2>
                <div className="flex md:space-x-32 space-x-6">
                  <p className="text-gray-500 text-sm tracking-wide">
                    Singapore
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-3 md:text-base text-sm dark:text-gray-400 tracking-wide">
              "The level of customer support I've received is outstanding.
              Whenever I had a question or an issue, their team was quick to
              respond and provided excellent assistance."
            </p>
          </div>

          <div className="border-2 border-gray-500 hover:border-red-500 md:w-[410px] w-[330px] h-[225px] rounded-md p-5 bg-white dark:bg-transparent">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                alt="Profile image"
                width={50}
                height={50}
                src="/assets/images/profile4.png"
              />
              <div>
                <h2 className="font-medium dark:text-gray-300 tracking-wide">
                  Parker, Peter
                </h2>
                <div className="flex md:space-x-32 space-x-6">
                  <p className="text-gray-500 text-sm tracking-wide">America</p>
                </div>
              </div>
            </div>
            <p className="mt-3 md:text-base text-sm dark:text-gray-400 tracking-wide">
              "I've used several similar products in the past, but none of them
              come close to the level of performance and satisfaction I've
              experienced with this one."
            </p>
          </div>
        </div>

        <div className="w-full border dark:border-gray-700 rounded-md shadow-xl p-14 mx-auto mt-10">
          <div className="flex md:flex-row flex-col justify-between ">
            <div>
              <h1 className="font-medium lg:text-2xl  text-xl md:max-w-full max-w-sm dark:text-gray-300 tracking-wide">
                Unlock Exclusive Features with a Subscription!
              </h1>
              <p className="text-gray-500 lg:text-base  text-sm mt-3 tracking-wide">
                Join us today to access premium benefits and elevate your online
                experience.
              </p>
            </div>

            <button className="tracking-wide border-2 md:mt-0 mt-5 border-red-500 md:py-1 py-3 px-12 rounded-full  font-bold bg-red-500 dark:text-white dark:hover:bg-transparent text-white hover:bg-white hover:text-gray-800 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
