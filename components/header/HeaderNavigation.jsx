"use client";
import Link from "next/link";
import { useState } from "react";
import HeaderMenu from "@/data/HeaderMenu";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { usePathname } from "next/navigation";

const HeaderNavigation = () => {
  const [menuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="lg:w-[526px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-[#111111] ">
      {/* menu for mobile devices*/}
      <nav className={`${menuOpen ? "block mx-auto" : "hidden lg:block"}`}>
        <ul
          className={`${
            menuOpen
              ? "block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]"
              : "flex "
          }`}
        >
          {HeaderMenu.map((item) => (
            <Link
              key={item.id}
              className={`${
                isActiveLink(item.routePath, pathname)
                  ? "w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#4b72d2] to-[#001e69] lg:text-white lg:dark:text-white   lg:bg-gradient-to-r"
                  : "w-full h-20 rounded-[10px]  cursor-pointer  font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center   transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#4b72d2] to-[#001e69]"
              } `}
              href={item.routePath}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavigation;
