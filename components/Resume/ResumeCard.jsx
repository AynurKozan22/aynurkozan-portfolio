"use client";
import { useTheme } from "next-themes";
import resumeData from "@/data/resumeData";

const ResumeCard = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {resumeData.map((item) => (
        <div key={item.id}>
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-6xl text-[#4b72d2]">{item.icon}</div>
            <h4 className="text-5xl dark:text-white font-medium">
              {item.title}
            </h4>
          </div>
          {item.items.map((singleItem) => (
            <div
              className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2"
              style={{
                background: `${
                  theme === "dark" ? "transparent" : singleItem?.bg
                }`,
              }}
              key={singleItem.id}
            >
              <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
                {singleItem.date}
              </span>
              <h3 className="text-xl dark:text-white"> {singleItem.title} </h3>
              <p className="dark:text-[#b7b7b7]">{singleItem.place}</p>
              {Array.isArray(singleItem.description) ? (
                <ul className="list-none space-y-2 dark:text-[#b7b7b7]">
                  {singleItem.description.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="dark:text-[#b7b7b7]">{singleItem.description}</p>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ResumeCard;
