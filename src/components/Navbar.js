import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-100 drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">EVENTX</h1>
          <ul className="hidden md:flex cursor-pointer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/booking">Book Now</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 ">
          <Link to="/login">
            <button className="bg-gray-900 px-8 py-3 border-gray-900 ">
              Log In
            </button>
          </Link>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-orange-50 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/about" onClick={handleClose}>
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/support" onClick={handleClose}>
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/booking" onClick={handleClose}>
            Book Now
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-gray-900 px-8 py-3 border-gray-900 ">
            <Link to="/login" onClick={handleClose}>
              Log In
            </Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
