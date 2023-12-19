"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

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
          <Bars3Icon className="h-10 w-10 text-white bg-primary border border-primary rounded-lg m-6 md:hidden absolute right-0 top-1" />
        </div>
        <div className="m-4 hidden md:flex">
          <button className="bg-secondary text-white py-2 px-4 rounded-full mr-4 md:text-lg hover:bg-secondaryHov cursor-pointer">
            Contact Us
          </button>
          <button className="bg-primary text-white py-2 px-4 rounded-full md:text-lg hover:bg-primaryHov cursor-pointer">
            Donate
          </button>
        </div>
      </header>
      <nav className="bg-primary text-white py-2 md:block hidden">
        <ul className="flex justify-center md:gap-10 lg:gap-24 xl:gap-32">
          <Link className="hover:text-gray-300" href={"/"}>
            Resources
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Events
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Presentations
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Prevention
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Employment
          </Link>
          <Link className="hover:text-gray-300" href={"/"}>
            Testimonials
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
