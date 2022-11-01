import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between absolute w-full z-20 py-6 items-center px-20">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-[#486A6F]"></div>
        <Link href="/">
          <a className="text-[#486A6F] font-bold text-xl">Buildit</a>
        </Link>
      </div>
      <nav className="flex space-x-8 justify-center list-none text-[#486A6F]">
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/service">
            <a>Service</a>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <a>Project</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </nav>
      <div className="bg-[#486A6F] text-white px-2 py-2 text-sm rounded-md ">
        <button>Need a project ?</button>
      </div>
    </div>
  );
};

export default Navbar;
