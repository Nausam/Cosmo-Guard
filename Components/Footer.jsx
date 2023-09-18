import Image from "next/image";
import React from "react";

import Logo from "../public/assets/icons/logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="w-full mt-20">
      <div className="md:hidden w-full flex flex-col gap-2 items-center text-center mt-10">
        <div className="flex items-center gap-3">
          <Image alt="Logo" src={Logo} width={35} height={35} />
          <h3 className="font-bold dark:text-gray-300 text-gray-800 text-lg tracking-wide">
            Cosmo Guard
          </h3>
        </div>
        <p className="text-xs text-gray-500 max-w-xs tracking-wide">
          Cosmo Guard is a distinguished private virtual network renowned for
          its exceptional security and a wealth of distinctive features. Your
          online privacy and data protection are our top priorities.
        </p>
      </div>
      <div className="flex max-w-6xl mx-auto justify-between m-5 py-2 px-10 items-center">
        <div className="flex justify-between shadow-lg w-full p-5">
          <div>
            <h3 className="font-medium dark:gray-300 tracking-wide">Product</h3>
            <ul className="text-xs text-gray-500 space-y-2 mt-3">
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Download
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Pricing
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Locations
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Servers
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Countries
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Blog
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium dark:gray-300 tracking-wide">Engage</h3>
            <ul className="text-xs text-gray-500 space-y-2 mt-3">
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Cosmo Guard
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                FAQ
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Tutorials
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                About Us
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Terms of Service
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium dark:gray-300 tracking-wide">
              Earn Money
            </h3>
            <ul className="text-xs text-gray-500 space-y-2 mt-3 tracking-wide">
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Affliliate
              </li>
              <li className="cursor-pointer hover:text-red-500 tracking-wide">
                Become Partner
              </li>
            </ul>
          </div>

          <div className="md:flex flex-col gap-2 hidden">
            <div className="flex items-center justify-center gap-3">
              <Image alt="Logo" src={Logo} width={35} height={35} />
              <h3 className="font-bold dark:text-gray-300 text-gray-800 text-lg ">
                Cosmo Guard
              </h3>
            </div>
            <p className="text-xs text-gray-500 max-w-xs tracking-wide text-center">
              Cosmo Guard is a distinguished private virtual network renowned
              for its exceptional security and a wealth of distinctive features.
              Your online privacy and data protection are our top priorities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
