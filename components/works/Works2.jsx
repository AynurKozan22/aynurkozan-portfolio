"use client";
import Image from "next/image";
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from "react-icons/fi";
import { BsXCircle } from "react-icons/bs";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import portfolioData from "@/data/worksData";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Modal.setAppElement("#__next");

const Works2 = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    500: 1,
  };
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handlePortfolioData = (id) => {
    const find = portfolioData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  const handleModle = (id) => {
    handlePortfolioData(id);
  };
  const [test, setTest] = useState("All");

  const handleSearch = (text) => {
    handleData(text);
    setTest(text);
  };
  useEffect(() => {
    setTest("All");
    handleData("All");
  }, []);

  const [data, setData] = useState(portfolioData);

  const handleData = (text) => {
    if (text === "All") {
      setData(portfolioData);
    } else {
      const findData = portfolioData.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  return (
    <>
      <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
        <li
          className={`${
            test === "All" ? "text-[#4b72d2]" : "fillter-btn "
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("All")}
        >
          All
        </li>
        <li
          className={`${
            test === "E-Commerce" ? "text-[#4b72d2]" : "fillter-btn"
          } mr-4 md:mx-4`}
          onClick={() => handleSearch("E-Commerce")}
        >
          E-Commerce
        </li>
        <li
          className={`${
            test === "E-Commerce - UI/UX" ? "text-[#4b72d2]" : "fillter-btn"
          }  `}
          onClick={() => handleSearch("E-Commerce - UI/UX")}
        >
          Web Design
        </li>
      </ul>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item) => (
          <div
            className="rounded-lg p-6 dark:border-[2px] border-[#212425]"
            style={{
              background: `${theme === "dark" ? "transparent" : item?.bg}`,
            }}
            key={item.id}
            onClick={() => handleModle(item?.id)}
          >
            <div className="overflow-hidden rounded-lg lg:h-[297px] flex items-center justify-center mx-auto">
              <Image
                className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto "
                src={item.imgSmall}
                width={300}
                height={300}
                priority
                alt="portfolio Image"
              />
            </div>
            <span className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
              {item.tag}
            </span>
            <h2 className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#4b72d2] dark:hover:text-[#4b72d2] dark:text-white mt-2">
              {item.title}
            </h2>
          </div>
        ))}
      </Masonry>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className=" outline-none flex items-center  p-4 md:p-8  rounded-2xl my-8"
      >
        <div className=" w-full md:w-10/12 flex items-center   lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-4 md:p-8 absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
          <div className=" overflow-y-scroll max-h-[80vh] no-scrollbar ">
            <BsXCircle
              onClick={() => setIsOpen(false)}
              className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6 z-50  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
            />
            <h2 className="text-[#4b72d2] dark:hover:text-[#4b72d2] text-4xl text-center font-bold">
              {singleData.tag} Project
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 my-6">
              <div className="space-y-2">
                <p className="dark:text-white flex items-center text-[15px]  sm:text-lg ">
                  <FiFilePlus className="sm:text-lg hidden sm:block mr-2  md:text-xl" />
                  Project :&nbsp; <span className="font-medium "> Website</span>
                </p>
                <p className="dark:text-white flex items-center text-[15px]  sm:text-lg ">
                  <FiCode className="text-lg mr-2 hidden sm:block " />
                  Languages :&nbsp;
                  <span className="font-medium ">{singleData?.languages}</span>
                </p>
              </div>

              <div className="space-y-2">
                <p className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px]  sm:text-lg ">
                  <FiUser className="text-lg mr-2 hidden sm:block" />
                  Client :&nbsp;
                  <span className="font-medium ">{singleData?.client}</span>
                </p>

                <p className="dark:text-white flex items-center text-[15px] sm:text-lg ">
                  <FiExternalLink className="text-lg mr-2 hidden sm:block" />
                  Preview :&nbsp;
                  <span className="font-medium transition-all duration-300 ease-in-out hover:text-[#4b72d2] ">
                    <a
                      href={singleData?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {singleData?.linkText}
                    </a>
                  </span>
                </p>
              </div>
            </div>

            <p className="dark:text-white  text-2line font-normal text-[15px] sm:text-sm  ">
              {singleData?.description}
            </p>

            <Image
              className="w-full md:h-[450px]  h-auto object-cover rounded-xl mt-6"
              src={singleData?.img}
              alt="blog details image"
              width={620}
              height={420}
              loading="lazy"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Works2;
