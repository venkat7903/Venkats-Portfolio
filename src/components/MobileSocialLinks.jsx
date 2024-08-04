/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Tooltip } from "react-tooltip";

const MobileSocialLinks = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/venkats7903",
      name: "LinkedIn",
    },
    {
      id: 2,
      child: <FaGithub size={30} />,
      href: "https://github.com/venkat7903/venkat7903.git",
      name: "Github",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} />,
      href: "mailto: venkatsrigakollu7903@gmail.com",
      name: "Mail",
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} />,
      href: "/resume1.pdf",
      name: "Resume",
      download: true,
    },
  ];

  return (
    <div className="mb-[20px] mt-[30px] w-full lg:hidden">
      <p className="text-gray-400 font-bold mb-[20px]">FIND ME IN</p>
      <div className="flex gap-4">
        {links.map(({ id, child, href, download, name }) => (
          <a
            key={id}
            href={href}
            download={download}
            target="_blank"
            rel="noreferrer"
            data-tooltip-id={id}
            data-tooltip-content={name}
            data-tooltip-place="top"
          >
            <span className="w-16 h-16 bg-blue-900 bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md  hover:-translate-y-1 transition-all hover:text-rose-500 cursor-pointer duration-300;">
              {child}
            </span>
            <Tooltip id={id} color="#000" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileSocialLinks;
