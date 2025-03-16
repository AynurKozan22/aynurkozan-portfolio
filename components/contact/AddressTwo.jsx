"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import addressData from "@/data/addressData";

const AddressTwo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {addressData.map((item, i) => (
        <div
          key={i}
          style={{
            background: `${theme === "dark" ? "#212425" : item?.bg}`,
          }}
          className="flex flex-wrap dark:bg-transparent p-[30px]  border-[#A6A6A6] gap-2 rounded-xl "
        >
          <span className="w-8 mt-2">
            <Image
              src={item.icon}
              width={30}
              height={20}
              alt="icon"
              className="text-4xl dark:text-white"
            />
          </span>
          <div className="space-y-2">
            <p className="text-xl font-semibold dark:text-white">
              {item?.title} :
            </p>
            {item?.info}
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressTwo;
