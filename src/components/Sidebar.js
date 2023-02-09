import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const Sidebar = [
  {
    title: "home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "menu",
    path: "/menu",
    icons: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "basket",
    path: "/basket",
    icons: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    qty: 0,
  },
  {
    title: "payment",
    path: "/payment",
    icons: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "about",
    path: "/about",
    icons: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "contact",
    path: "/contact",
    icons: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
