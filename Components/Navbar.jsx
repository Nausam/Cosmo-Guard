"use client";

import ThemeButton from "@/Components/ThemeButton";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="w-full fixed top-0 backdrop-blur-lg">
      <div className="flex max-w-6xl mx-auto justify-between m-2 py-2 px-10 items-center backdrop-blur-lg rounded-md shadow-lg dark:shadow-none shadow-slate-100">
        <div className="flex items-center gap-3">
          <ThemeButton />
          <div className="flex items-center gap-2">
            <Image
              alt="Logo"
              src="/assets/icons/logo.png"
              width={35}
              height={35}
            />
            <h3 className="font-medium dark:text-gray-300 text-gray-800 text-lg hidden md:flex tracking-wide">
              Cosmo Guard
            </h3>
          </div>
        </div>
        <div className="lg:flex hidden lg:gap-10 gap-3 text-gray-500 dark:text-gray-400">
          <ul className="flex gap-10">
            <li>
              <Link className="text-md hover:text-red-500" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-md tracking-wide hover:text-red-500"
                href="#features"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="text-md tracking-wide hover:text-red-500"
                href="#pricing"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="tracking-wide text-md hover:text-red-500"
                href="#testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className=" tracking-wide text-md hover:text-red-500"
                href="#footer"
              >
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button className="py-2 px-8 rounded-full font-medium hover:text-red-500 border hover:border-red-500 lg:flex hidden dark:text-gray-300 text-gray-800 tracking-wide transition-all duration-300">
            Sign In
          </button>
          <button className="border border-red-500 py-2 px-8 rounded-full text-red-500 font-medium hover:bg-red-500 hover:text-white tracking-wide transition-all duration-300">
            Sign Up
          </button>
          <Image
            alt="Hamburger menu"
            className="z-50 cursor-pointer lg:hidden flex text-red-500"
            width={30}
            height={30}
            src="/assets/icons/hamburger.png"
            onClick={toggleMenu}
          />
        </div>

        {showMenu ? (
          <div className="absolute top-10 right-0 p-10">
            <div className="bg-gray-200 dark:bg-gray-800 p-5 rounded-lg flex flex-col items-center shadow-xl">
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    className="text-sm hover:text-red-500 tracking-wide"
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-red-500 tracking-wide"
                    href="#features"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-red-500 tracking-wide"
                    href="#pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-red-500 tracking-wide"
                    href="#testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm hover:text-red-500 tracking-wide"
                    href="#footer"
                  >
                    Help
                  </Link>
                </li>
              </ul>
              <button className="mt-5 border border-red-500 py-2 px-8 rounded-full text-red-500 font-medium hover:bg-red-500 hover:text-white test tracking-wide transition-all duration-300">
                Sign In
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
