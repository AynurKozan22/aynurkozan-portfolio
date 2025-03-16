import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://github.com/AynurKozan22",
      icon: <FaGithub />,
      iconClass: "text-[#1773EA]",
    },

    {
      id: 2,
      link: "https://www.linkedin.com/in/aynur-kozan-1279b419a/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
