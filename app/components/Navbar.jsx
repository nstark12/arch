"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "./NavLinks";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
      <header className="flex flex-row justify-between items-center">
        <div className="flex">
          <Link href={"/"}>
            <Image
              src={"/image/logo.png"}
              alt="ARCh logo"
              width={350}
              height={350}
            />
          </Link>
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)}>
              <Bars3Icon className="h-10 w-10 text-white bg-primary border border-primary rounded-lg m-6 md:hidden absolute right-0 top-1" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)}>
              <XMarkIcon className="h-10 w-10 text-white bg-primary border border-primary rounded-lg m-6 md:hidden absolute right-0 top-1" />
            </button>
          )}
        </div>
        <div className="m-4 hidden md:flex">
          <Link href={"/"}>
            <button className="bg-secondary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-secondaryHov cursor-pointer">
              Contact Us
            </button>
          </Link>
          <a
            target="_blank"
            href={
              "https://archchangeslives.networkforgood.com/projects/128949-every-day-giving"
            }
          >
            <button className="bg-primary text-white py-2 px-4 rounded-full md:text-lg hover:bg-primaryHov cursor-pointer">
              Donate
            </button>
          </a>
        </div>
      </header>
      {navbarOpen && (
        <div onClick={() => setNavbarOpen(false)}>
          <MenuOverlay />
        </div>
      )}
      <nav className="bg-primary text-white py-2 md:block hidden relative">
        <ul className="flex justify-center md:gap-2 lg:gap-18 lg:text-lg xl:gap-26 2xl:gap-36">
          <NavLinks />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
