"use client";

import React, { useState } from "react";
import "../styles/navbar.css";
import { a } from "framer-motion/client";

export const Navbar = () => {
  const [isLogged, setLogged] = useState(false);

  return (
    <div className="navbar bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className="smNavitems">
              <a className="">HOME</a>
            </li>
            <li className="smNavitems">
              <input type="checkbox" name="" id="expandNav" />
              <label htmlFor="expandNav">
                <a className="">SERVICES</a>
              </label>
              <ul className="p-2 ">
                <li>
                  <a>Online Checkup</a>
                </li>
                <li>
                  <a>Online Appointments</a>
                </li>
              </ul>
            </li>
            <li className="smNavitems">
              <a>CONTACT US</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">HPS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <details>
              <summary>SERVICES</summary>
              <ul className="p-2 bg-white w-44">
                <li>
                  <a>Online Checkup</a>
                </li>
                <li>
                  <a>Online Appointment</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>CONTACT US</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end ">
          {!isLogged && (
            <>
              <div className="gettingLogged flex gap-4">
                <button>
                  <a
                    href="/login"
                    className="btn btn-ghost text-black hover:bg-slate-800 hover:text-stone-50 "
                  >
                    Login
                  </a>
                </button>
                <button>
                  <a
                    href="/signup"
                    className="btn btn-ghost outline-chart-1 text-black hover:bg-slate-800 hover:text-stone-50 "
                  >
                    Signup
                  </a>
                </button>
              </div>
            </>
          )}
          {isLogged && (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
