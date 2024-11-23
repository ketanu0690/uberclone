"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-2 py-2 flex items-center justify-between z-4000" >
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="px-8 py-4 flex items-center">
        <Link href="/" onClick={()=>setIsOpen(false)}>
          <p className="text-2xl font-bold hover:text-gray-400 cursor-pointer">
            Uber
          </p>
        </Link>
        <ul className="hidden md:flex space-x-8 px-2">
          <li>
            <Link href="/ride">
              <p className="hover:text-gray-400">Ride</p>
            </Link>
          </li>
          <li>
            <Link href="/drive">
              <p className="hover:text-gray-400">Drive</p>
            </Link>
          </li>
          <li>
            <Link href="/business">
              <p className="hover:text-gray-400">Business</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:text-gray-400">About</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/en">
          <button className="text-white hover:text-gray-400 py-2 px-2">
            EN
          </button>
        </Link>
        <Link href="/help">
          <button className="text-white hover:text-gray-400 py-2 px-2">
            Help
          </button>
        </Link>
        <Link href="/loginIn">
          <button className="text-white hover:text-gray-400 py-2 px-2">
            Log in
          </button>
        </Link>
        <Link href="/SignUp">
          <button className="bg-white text-black hover:bg-gray-300 font-semibold py-2 px-6 rounded-full">
            Sign up
          </button>
        </Link>
      </div>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black text-center flex flex-col space-y-4 md:hidden z-100" onClick={toggleMenu}>
          <li>
            <Link href="/ride">
              <p className="hover:text-gray-400">Ride</p>
            </Link>
          </li>
          <li>
            <Link href="/drive">
              <p className="hover:text-gray-400">Drive</p>
            </Link>
          </li>
          <li>
            <Link href="/business">
              <p className="hover:text-gray-400">Business</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="hover:text-gray-400">About</p>
            </Link>
          </li>
          <li>
            <Link href="/en">
              <button className="text-white hover:text-gray-400">EN</button>
            </Link>
          </li>
          <li>
            <Link href="/help">
              <button className="text-white hover:text-gray-400">Help</button>
            </Link>
          </li>
          <li>
            <button className="text-white hover:text-gray-400">Log in</button>
          </li>
          <li>
            <button className="bg-white text-black hover:bg-gray-300 font-semibold py-2 px-6 rounded-full">
              Sign up
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
