"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import DarkMode from "../mode/DarkMode";
import DarkModeMobile from "../mode/DarkModeMobile";
import HeaderMenu from "../../data/HeaderMenu";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5  lg:px-0 lg:pt-[50px]">
      <div className="w-full flex justify-between  px-4">
        <h1 className="highlight-text  bg-opacity-70 p-2 rounded-lg">
          Building Tomorrow, Today.
        </h1>

        <div className="flex items-center">
          <DarkMode />
          <DarkModeMobile />
          {!menuOpen ? (
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#4b72d2] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
            >
              <AiOutlineMenu />
            </span>
          ) : (
            <span
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#4b72d2] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
            >
              <AiOutlineClose />
            </span>
          )}
        </div>
      </div>

      <nav className={`${menuOpen ? "block lg:hidden" : "hidden"}`}>
        <ul
          className={`${
            menuOpen
              ? "block  rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425]"
              : "flex my-12 "
          }`}
        >
          {HeaderMenu.map((item) => (
            <li key={item.id} className="mb-1">
              <Link
                className={`${
                  isActiveLink(item.routePath, pathname)
                    ? "rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#4b72d2] to-[#001e69] dark:text-[#A6A6A6] linked bg-gradient-to-r "
                    : "rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#4b72d2] to-[#001e69] dark:text-[#A6A6A6]"
                } `}
                href={item.routePath}
              >
                <span className="mr-2 text-xl">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
