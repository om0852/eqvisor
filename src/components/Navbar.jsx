"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [navbarClass, setNavbarClass] = useState("");

  useEffect(() => {
    if (pathname === "/") {
      setNavbarClass(navbar ? "active" : "none");
    } else {
      setNavbarClass("bg-black");
    }
  }, [pathname, navbar]);
  const navbarMenu = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Team",
      href: "/team",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const changeBackground = () => {
    if (window.scrollY < 10) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      className={`z-50 navbar ${navbarClass} sticky top-0 left-0 z-[200] w-full h-[12vh] flex flex-row items-center justify-between px-8`}
    >
      {/* mobile navbar */}
      {toggle && (
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-white z-[100]">
          <div className="flex justify-end px-10 py-10">
            {" "}
            <span
              onClick={handleToggle}
              className="w-10 h-10 rounded-full bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="size-10"
              >
                <path
                  fill="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div className="w-full">
            <ul className="px-10 grid gap-4">
              {navbarMenu.map((data, index) => (
                <li
                  key={index}
                  className={`${
                    pathname == data.href ? "text-blue-600" : "text-black"
                  } text-2xl font-thin`}
                >
                  <Link href={data.href}>{data.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* laptop navbar */}
      <div className="flex items-center justify-between md:justify-start w-full gap-16">
        <span className="text-[1.4rem] text-white">
          <strong>EQVISOR</strong>
        </span>
        <span className="block md:hidden" onClick={handleToggle}>
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 48 48"
            >
              <path
                fill="white"
                d="M 6 9 A 2.0002 2.0002 0 1 0 6 13 L 42 13 A 2.0002 2.0002 0 1 0 42 9 L 6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26 L 42 26 A 2.0002 2.0002 0 1 0 42 22 L 6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39 L 42 39 A 2.0002 2.0002 0 1 0 42 35 L 6 35 z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-10"
            >
              <path
                fill="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </span>
        <ul className="hidden md:flex gap-8 items-center">
          {navbarMenu.map((data, index) => (
            <li key={index}>
              <Link href={data.href}>
                <span
                  className={`hover:text-blue-400 ${
                    pathname == data.href ? "text-blue-400" : "text-white"
                  } cursor-pointer`}
                >
                  {data.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <button className="bg-white hover:bg-purple-300 text-black py-[10px] px-6 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
