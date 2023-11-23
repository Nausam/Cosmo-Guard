const ChoosePlan = () => {
  return (
    <section id="pricing" className="w-full">
      <div className="text-center mt-36">
        <h1 className="font-bold dark:text-gray-300 md:text-4xl text-2xl mx-auto md:max-w-full max-w-md tracking-wide">
          Select Your Subscription Plan
        </h1>
        <h3 className="text-gray-500 mt-5 md:max-w-2xl max-w-sm mx-auto tracking-wide">
          Choose the package that best suits your needs and embark on your
          exploration with enthusiasm and joy.
        </h3>
      </div>
      <div className="flex max-w-6xl mx-auto m-5 py-2 px-10 items-center mt-10 p-5">
        <div className="flex flex-wrap items-center justify-center gap-10 mx-auto">
          <div className="border-2 shadow-xl shadow-slate-200 dark:shadow-none  border-gray-400 hover:border-red-500 dark:hover:border-red-500 dark:border-gray-800 rounded-3xl p-10">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="mt-8 font-bold text-3xl dark:text-gray-300 tracking-wide">
                Free Plan
              </h2>

              <h3 className="py-3 text-gray-500">30 Day Free Trial</h3>

              <div className="mt-3">
                <div className="border-2 text-sm border-orange-500 py-1 px-3 rounded-lg  font-bold bg-orange-500 text-white transition-all duration-300">
                  Free Trial
                </div>
              </div>

              <div className="mt-3">
                <button className="border-2 border-red-500 py-3 px-12 rounded-full text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all duration-300">
                  Select
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 shadow-xl shadow-slate-200 dark:shadow-none   border-orange-400 dark:border-orange-500 hover:border-red-500 dark:hover:border-red-500  rounded-3xl p-10">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="mt-8 font-bold text-3xl dark:text-gray-300 tracking-wide">
                1 Month
              </h2>

              <h3 className="py-3 tracking-wide">
                $12.95{" "}
                <span className="text-gray-500 tracking-wide">/ Month</span>
              </h3>

              <div className="mt-3">
                <div className="border-2 text-sm border-orange-500 py-1 px-3 rounded-lg  font-bold bg-orange-500 text-white transition-all duration-300">
                  Most Popular
                </div>
              </div>

              <div className="mt-3">
                <button className="border-2 border-red-500 py-3 px-12 rounded-full text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all duration-300">
                  Select
                </button>
              </div>
            </div>
          </div>

          <div className="border-2 shadow-xl shadow-slate-200 dark:shadow-none  border-gray-400 hover:border-red-500 dark:hover:border-red-500 dark:border-gray-800 rounded-3xl p-10">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h2 className="mt-8 font-bold text-3xl dark:text-gray-300 tracking-wide">
                12 Months
              </h2>

              <h3 className="py-3 tracking-wide">
                $6.95{" "}
                <span className="text-gray-500 tracking-wide">/ Month</span>
              </h3>

              <div className="mt-3">
                <div className="border-2 text-sm border-orange-500 py-1 px-3 rounded-lg  font-bold bg-orange-500 text-white transition-all duration-300">
                  Best Value
                </div>
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
