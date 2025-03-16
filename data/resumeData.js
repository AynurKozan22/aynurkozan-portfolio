import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2020-2024",
        title: "Certified SFCC Frontend Developer",
        place: "OSF Digital",
        bg: "#EEF5FA",
        description: [
          "Worked on 10+ e-commerce projects for global brands like Sephora, Tissot, Baccarat, and Black&Decker, optimizing UI/UX for platforms with 10M+ monthly visitors.",
          "Reduced page load times by 30% using lazy loading, asset minification, and SFCC caching strategies, enhancing SEO and customer retention.",
          "Migrated 10+ legacy JavaScript codebases from jQuery to React.js, improving maintainability and reducing development time by 40%.",
          "Developed a custom product recommendation engine in collaboration with the backend team, increasing conversion rates by 15%.",
          "Integrated Stripe, Adyen, and PayPal payment solutions, ensuring seamless checkout experiences for users in 50+ countries.",
          "Implemented a multi-language and currency switcher feature, allowing localized experiences for users across different regions.",
          "Worked closely with UX designers to convert Figma/Adobe XD designs into pixel-perfect, responsive interfaces, ensuring WCAG accessibility compliance.",
        ],
      },
      {
        id: 2,
        date: "2013 - 2020",
        title: "Frontend Developer",
        place: "Horizont GPS Tracking System",
        bg: "#F2F4FF",
        description: [
          "Developed a real-time GPS tracking dashboard used by 15,000+ fleet vehicles, providing 1-second latency updates with WebSockets and Google Maps API.",
          "Improved frontend performance by 40%, reducing unnecessary API calls and optimizing UI rendering with React.memo & useCallback.",
          "Integrated a geofencing system, alerting users when vehicles enter/exit predefined zones, improving fleet security.",
          "Built 20+ client websites with fully responsive, SEO-optimized, and high-performance interfaces.",
        ],
      },
      {
        id: 3,
        date: "2013",
        title: "Web Designer / Developer",
        place: "Netport Creative Agency",
        bg: "#EEF5FA",
        description: [
          "Designed and developed 10+ WordPress & Joomla-based websites for corporate clients, optimizing for performance and accessibility.",
          "Created custom UI animations and interactive elements, increasing user engagement by 30%.",
          "Developed SEO-optimized landing pages that boosted conversion rates by 25%.",
        ],
      },
      {
        id: 4,
        date: "2009- 2011",
        title: "Web Designer",
        place: "Hitachi – Kurt & Kurt A.Ş",
        bg: "#F2F4FF",
        description: [
          "Designed and maintained corporate websites and promotional materials, ensuring brand consistency for 100K+ monthly users.",
          "Developed custom graphics, UI components, and email marketing templates.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2006-2010",
        title: "Faculty of Chemistry",
        place: "Ege University",
        bg: "#FCF9F2",
      },
      {
        id: 1,
        date: "2022",
        title: " Salesforce B2C Commerce Developer Certification",
        place: "Osf Digital",
        bg: "#FCF9F2",
      },
      {
        id: 1,
        date: "2021",
        title: "Trailhead Headless Commerce Developer Certification",
        place: "Osf Digital",
        bg: "#FCF9F2",
      },
      {
        id: 1,
        date: "2016",
        title: "UX / UI / Web Design Certification",
        place: "Horizont Gps Tracking",
        bg: "#FCF9F2",
      },
      {
        id: 1,
        date: "2019",
        title: "React.js Developer Certification",
        place: "Horizont Gps Tracking",
        bg: "#FCF9F2",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2022",
        title: "Hero Of the Month - Certified Frontend Developer",
        place: "OSF DIGITAL",
        bg: "#F3F6F6",
      },
      {
        id: 2,
        date: "2023",
        title: "Hackathon Finalist",
        place: "OSF DIGITAL",
        bg: "#F3F6F6",
      },
      {
        id: 3,
        date: "2019",
        title: "Woman in Techs",
        place: "Horizont GPS Systems",
        bg: "#F3F6F6",
      },
    ],
  },
];
