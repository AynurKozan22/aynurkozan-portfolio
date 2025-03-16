"use client";
import { useTheme } from "next-themes";
import serviceData from "@/data/serviceData";

const Service = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {serviceData.map((item) => (
        <div
          className="about-box dark:bg-transparent"
          key={item.id}
          style={{
            background: `${theme === "dark" ? "transparent" : item?.bg}`,
          }}
        >
          <div className="text-6xl skillsbtn text-[#4b72d2]">{item.icon}</div>
          <div className="space-y-2 break-word">
            <h3 className="dark:text-white text-xl font-semibold">
              {item?.title}
            </h3>
            <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
              {item?.des}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
