"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/app/globals.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY < 10) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={`z-50 navbar ${
        navbar ? "active" : "none"
      } sticky top-0 left-0 w-full h-[12vh] flex flex-row items-center justify-between px-8 `}
    >
      <div className="flex gap-16">
        <span className="text-[1.4rem] text-white">
          <strong>EQVISOR</strong>
        </span>
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/">
              <span className="hover:text-blue-300 text-white cursor-pointer">
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <span className="hover:text-blue-300 text-white cursor-pointer">
                Services
              </span>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <span className="hover:text-blue-300 text-white cursor-pointer">
                Team
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-blue-300 text-white cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-white hover:bg-purple-300 text-black py-[10px] px-6 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
