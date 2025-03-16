import { createObfuscatedMailto } from "../utilis/emailObfuscator";

module.exports = [
  {
    id: "01",
    icon: "/images/contact/email 1.png",
    title: "Email ",
    info: (
      <p>
        <a
          className="text-gray-lite text-lg dark:text-[#A6A6A6]"
          {...createObfuscatedMailto("aynurkozan22@gmail.com")}
        />
      </p>
    ),
    bg: "#FCF9F2",
  },
  {
    id: "02",
    icon: "/images/contact/map 1.png",
    title: "Address ",
    info: (
      <>
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
          Izmir - Turkey
        </p>
      </>
    ),
    bg: "#F2F4FF",
  },
];
