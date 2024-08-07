import React from "react";
import { v4 as uuidv4 } from "uuid";

import mySql from "../assets/mysql-icon.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import postman from "../assets/postman.png";
import c from "../assets/c.png";

const Experience = () => {
  const skills = [
    {
      id: uuidv4(),
      src: c,
      title: "C++",
      style: "shadow-indigo-600",
    },
    {
      id: uuidv4(),
      src: python,
      title: "Python",
      style: "shadow-sky-600",
    },
    {
      id: uuidv4(),
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: uuidv4(),
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: uuidv4(),
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: uuidv4(),
      src: mySql,
      title: "MySQL",
      style: "shadow-orange-300",
    },
    {
      id: uuidv4(),
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: uuidv4(),
      src: nodejs,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: uuidv4(),
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: uuidv4(),
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: uuidv4(),
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: uuidv4(),
      src: postman,
      title: "Postman",
      style: "shadow-orange-600",
    },
  ];

  return (
    <div
      name="skills"
      className="pt-10 md:p-[45px] min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-800 to-black w-full"
    >
      <div className="max-w-screen-lg mx-auto my-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are technologies I'm confident with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-4 sm:py-6 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
