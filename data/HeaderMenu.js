import { AiOutlineHome } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

module.exports = [
  {
    id: 1,
    name: "Home",
    routePath: "/home-layout/home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "Resume",
    routePath: "/home-layout/resume",
    icon: <CgNotes />,
  },
  {
    id: 3,
    name: "Works",
    routePath: "/home-layout/works",
    icon: <FiCodesandbox />,
  },

  {
    id: 4,
    name: "Contact",
    routePath: "/home-layout/contact",
    icon: <RiContactsBookLine />,
  },
];
