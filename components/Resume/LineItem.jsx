"use client";
import { Line } from "rc-progress";
import React from "react";

const LineItem = ({ item }) => {
  const lineArray = [
    {
      id: 1,
      color: "#FF6464",
      name: "JavaScript (ES6+)",
      number: "85",
    },
    {
      id: 2,
      color: "#5185D4",
      name: "React.js, Next.js",
      number: "80",
    },
    {
      id: 3,
      color: "#CA56F2",
      name: "Redux, Context API",
      number: "80",
    },
    {
      id: 4,
      color: "#FF6464",
      name: "React Native",
      number: "75",
    },
    {
      id: 5,
      color: "#5185D4",
      name: "Bootstrap, TailwindCSS, SASS/SCSS, BEM Methodology",
      number: "90",
    },
    {
      id: 6,
      color: "#FF6464",
      name: "Micro Frontend Architecture",
      number: "80",
    },
    {
      id: 7,
      color: "#9272D4",
      name: "Git, GitHub, Webpack, RESTful APIs, GraphQL, JSON, XML,",
      number: "90",
    },
    {
      id: 8,
      color: "#FF6464",
      name: "Web Design",
      number: "95",
    },
    {
      id: 9,
      color: "#9272D4",
      name: "Mobile App",
      number: "70",
    },
    {
      id: 10,
      color: "#5185D4",
      name: "Adobe Creative Suite",
      number: "90",
    },
  ];

  return (
    <>
      {lineArray.map((item) => (
        <div className=" mb-7" key={item.id}>
          <div className="flex justify-between py-1">
            <span className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">
              {item?.name}
            </span>
            <span className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">
              {item?.number}%
            </span>
          </div>

          <Line
            percent={item?.number}
            strokeWidth={1}
            trailWidth={1}
            // trailColor={`${local === "dark" ? "#1C1C1C" : "#EDF2F2"}`}
            strokeColor={item?.color}
          />
        </div>
      ))}
    </>
  );
};

export default LineItem;
