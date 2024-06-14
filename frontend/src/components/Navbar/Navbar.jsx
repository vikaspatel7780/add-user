import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-slate-50 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <div className="text-3xl">
              <span className="font-bold text-red-600 text-4xl">V</span>scoder
            </div>
          </Link>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-600 text-white px-4 py-2 rounded-md"
                      : "bg-red-600 text-black px-4 py-2 rounded-md"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/adduser"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-600 text-white px-4 py-2 rounded-md"
                      : "bg-red-500 text-black px-4 py-2 rounded-md"
                  }
                >
                  Add Users
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
