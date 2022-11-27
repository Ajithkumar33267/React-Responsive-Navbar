import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-16 flex  bg-gray-500 justify-center ">
      <div className="w-full max-w-screen-xl  px-8 fixed top-0  h-16 items-center text-white flex justify-between ">
        <div>
          <h1 className="text-4xl font-bold uppercase cursor-pointer">Logo</h1>
        </div>
        {/* Normal Menu */}
        <ul className="hidden md:flex">
          <li className="px-4 border-b-2 border-b-transparent duration-300 hover:border-gray-100">
            <a href="">Home</a>
          </li>
          <li className="px-4 border-b-2 border-b-transparent duration-300 hover:border-gray-100">
            <a href="">About</a>
          </li>
          <li className="px-4 border-b-2 border-b-transparent duration-300 hover:border-gray-100">
            <a href="">Portofolio</a>
          </li>
          <li className="px-4 border-b-2 border-b-transparent duration-300 hover:border-gray-100">
            <a href="">Experience</a>
          </li>
          <li className="px-4 border-b-2 border-b-transparent duration-300 hover:border-gray-100">
            <a href="">Contact</a>
          </li>
        </ul>
        {/* Icons */}
        <div
          onClick={handleClick}
          className="flex md:hidden p-2 rounded-full hover:bg-gray-500 z-10"
        >
          {!nav ? (
            <AiOutlineMenu size={18} title="Open Menu" />
          ) : (
            <AiOutlineClose size={18} title="Close Menu" />
          )}
          {/* Social icons */}
          <div className="hidden w-screen md:block absolute top-40 left-0 ">
            <a
              href=""
              className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-blue-700 text-xl"
            >
              Facebook{" "}
              <span className="ml-2">
                <BsFacebook />
              </span>
            </a>

            <a
              href=""
              className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-blue-500 text-xl"
            >
              Twitter{" "}
              <span className="ml-2">
                <BsTwitter />
              </span>
            </a>
            <a
              href=""
              className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-gray-900 text-xl"
            >
              GitHub{" "}
              <span className="ml-2">
                <BsGithub />
              </span>
            </a>
            <a
              href=""
              className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-blue-600 text-xl"
            >
              LinkedIn{" "}
              <span className="ml-2">
                <BsLinkedin />
              </span>
            </a>
          </div>{" "}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-gray-600 flex md:hidden items-center justify-center text-4xl"
          }
        >
          <ul className="w-full text-center">
            <li className="py-4 hover:bg-gray-500">
              <a href="">Home</a>
            </li>
            <li className="py-4 hover:bg-gray-500">
              <a href="">About</a>
            </li>
            <li className="py-4 hover:bg-gray-500">
              <a href="">Portofolio</a>
            </li>
            <li className="py-4 hover:bg-gray-500">
              <a href="">Experience</a>
            </li>
            <li className="py-4 hover:bg-gray-500">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Social icons */}
      <div className="hidden w-screen md:block absolute top-40 left-0 text-white">
        <a
          href=""
          className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-blue-700 text-xl"
        >
          Facebook{" "}
          <span className="ml-2">
            <BsFacebook />
          </span>
        </a>

        <a
          href=""
          className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-blue-500 text-xl"
        >
          Twitter{" "}
          <span className="ml-2">
            <BsTwitter />
          </span>
        </a>
        <a
          href=""
          className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-gray-900 text-xl"
        >
          GitHub{" "}
          <span className="ml-2">
            <BsGithub />
          </span>
        </a>
        <a
          href=""
          className="h-10 w-[150px] duration-300 flex justify-between px-2 py-1 ml-[-110px] hover:ml-0 rounded-r-sm items-center bg-blue-600 text-xl"
        >
          LinkedIn{" "}
          <span className="ml-2">
            <BsLinkedin />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
