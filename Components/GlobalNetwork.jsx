import Image from "next/image";

const GlobalNetwork = () => {
  return (
    <section className="w-full">
      <div className="text-center mt-36">
        <h1 className="font-bold md:text-4xl text-2xl md:max-w-full max-w-md mx-auto dark:text-gray-300 tracking-wide">
          Extensive Global Network of High-Speed VPN Servers
        </h1>
        <h3 className="text-gray-500 mt-5 md:max-w-2xl max-w-sm mx-auto tracking-wide">
          Experience the <strong>Cosmo Guard</strong> widespread network,
          ensuring seamless connectivity as you travel and change locations.
        </h3>
      </div>
      <div className="flex flex-col max-w-6xl mx-auto m-5 py-2 px-10 items-center mt-20 p-5">
        <div className="flex w-full items-center justify-center">
          <Image
            alt="World map"
            width={800}
            height={600}
            src="/assets/images/global.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
