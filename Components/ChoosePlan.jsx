import Image from "next/image";
import React from "react";

const ChoosePlan = () => {
  return (
    <section className="w-full">
      <div className="text-center mt-20">
        <h1 className="font-medium dark:text-gray-300 text-3xl mx-auto max-w-md tracking-wide">
          Select Your Subscription Plan
        </h1>
        <h3 className="text-gray-500 mt-5 md:max-w-2xl max-w-md mx-auto tracking-wide">
          Choose the package that best suits your needs and embark on your
          exploration with enthusiasm and joy.
        </h3>
      </div>
      <div className="flex max-w-6xl mx-auto m-5 py-2 px-10 items-center mt-20 p-5">
        <div className="flex flex-wrap items-center justify-center gap-10 mx-auto">
          <div className="border-2 border-gray-300 hover:border-red-500 dark:hover:border-red-500 dark:border-gray-800 w-[250px] h-[550px] rounded-md">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Image width={120} height={120} src="/assets/images/Free.png" />
              <h2 className="mt-8 font-medium dark:text-gray-300 tracking-wide">
                Free Plan
              </h2>
              <div className="mt-5 text-gray-500">
                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Unlimited Bandwitch</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Encrypted Connection</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">No Traffic Logs</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Works on All Devices</p>
                </div>
              </div>

              <div className="mt-20">
                <h1 className="font-medium text-xl dark:text-gray-300 tracking-wide">
                  Free
                </h1>
              </div>
              <div className="mt-3">
                <button className="border-2 border-red-500 py-3 px-12 rounded-full text-red-500 font-bold hover:bg-red-500 hover:text-white tracking-wide transition-all duration-300">
                  Select
                </button>
              </div>
            </div>
          </div>

          {/* $9 Plan */}

          <div className="border-2 dark:hover:border-red-500 dark:border-gray-800 border-gray-300 hover:border-red-500 w-[250px] h-[550px] rounded-md">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Image
                width={120}
                height={120}
                src="/assets/images/Standard.png"
              />
              <h2 className="mt-8 font-medium dark:text-gray-300 tracking-wide">
                Standard Plan
              </h2>
              <div className="mt-5 text-gray-500">
                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Unlimited Bandwitch</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Encrypted Connection</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Yes Traffic Logs</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Works on All Devices</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Connect Anyware</p>
                </div>
              </div>

              <div className="mt-14">
                <h1 className="font-medium text-xl dark:text-gray-300 tracking-wide">
                  $9{" "}
                  <span className="text-gray-500 font-light tracking-wide">
                    / month
                  </span>
                </h1>
              </div>
              <div className="mt-3">
                <button className="border-2 border-red-500 py-3 px-12 rounded-full text-red-500 font-bold hover:bg-red-500 hover:text-white tracking-wide transition-all duration-300">
                  Select
                </button>
              </div>
            </div>
          </div>

          {/* $12 Plan */}

          <div className="border-2 dark:hover:border-red-500 dark:border-gray-800 border-gray-300 hover:border-red-500 w-[250px] h-[550px] rounded-md">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Image
                width={120}
                height={120}
                src="/assets/images/Premium.png"
              />
              <h2 className="mt-8 font-medium dark:text-gray-300 tracking-wide">
                Premium Plan
              </h2>
              <div className="mt-5 text-gray-500">
                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Unlimited Bandwitch</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Encrypted Connection</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Yes Traffic Logs</p>
                </div>

                <div className="flex gap-2 items-center py-1 ">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Works on All Devices</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Connect Anyware</p>
                </div>

                <div className="flex gap-2 items-center py-1">
                  <div>
                    <Image
                      width={15}
                      height={20}
                      src="/assets/icons/tick.png"
                    />
                  </div>
                  <p className="text-sm tracking-wide">Get New Features</p>
                </div>
              </div>

              <div className="mt-8">
                <h1 className="font-medium text-xl dark:text-gray-300 tracking-wide">
                  $12{" "}
                  <span className="text-gray-500 font-light tracking-wide">
                    / month
                  </span>
                </h1>
              </div>
              <div className="mt-3">
                <button className="border-2 border-red-500 py-3 px-12 rounded-full text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all duration-300">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;
