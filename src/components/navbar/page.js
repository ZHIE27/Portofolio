'use client';

import React, { useState } from 'react';
import style from "./navbar.module.css";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev); 
  };

  return (
    <>
      <nav className="fixed bg-slate-700 border-gray-200 dark:bg-gray-900 w-full z-10 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className={` ${style.nameBrand} self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}>
              Rival Fahrezy
            </span>
          </a>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400"
            aria-controls="navbar-dropdown"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`${open ? 'block' : 'hidden'} w-full md:flex md:w-auto`}
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium mt-4 md:mt-0 md:flex-row md:space-x-8  dark:bg-gray-800">

              <li>
                <a
                  href="#header"
                  className="block py-2 px-3 md:w-20 md:text-center text-white rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:px-2 md:p-0 dark:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className="block py-2 px-3 md:w-20 md:text-center text-white rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:px-2 md:p-0 dark:text-white"
                >
                  Skill
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 md:w-20 md:text-center text-white rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:px-2 md:p-0 dark:text-white"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className="block py-2 px-3 md:w-20 md:text-center text-white rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:px-2 md:p-0 dark:text-white"
                >
                  Certificate
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 md:w-20 md:text-center text-white rounded hover:bg-gray-100 md:hover:bg-white md:hover:text-black md:px-2 md:p-0 dark:text-white"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
