import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const About = () => {
  const aboutSec = {
    sec1: [
      {
        id: uuidv4(),
        title: "Birthday",
        desc: "03 Sep 2002",
      },
      {
        id: uuidv4(),
        title: "Phone",
        desc: "9390377213",
      },
      {
        id: uuidv4(),
        title: "City",
        desc: "Kakinada",
      },
    ],
    sec2: [
      {
        id: uuidv4(),
        title: "Age",
        desc: "21",
      },
      {
        id: uuidv4(),
        title: "Degree",
        desc: "B.Tech (CSE-AIML)",
      },
      {
        id: uuidv4(),
        title: "Email",
        desc: "venkatsrigakollu7903@gmail.com",
      },
    ],
  };

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex flex-col justify-center"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="text-xl mt-8">
            Hi, I'm <span className="font-semibold">Venkata Basavayya</span>, a
            hardworking and smartworking engineering graduate specialized in
            Computer Science Engineering. Along with my degree, I'm learning
            various technologies including{" "}
            <span className="font-semibold">Full Stack Development </span>
            in NxtWave. By applying these technologies, I have done various
            projects.
          </p>
          <br />
          <p className="text-xl">
            I can build scalable, efficient websites that provides user friendly
            experience. Apart from these, I can write Restful APIs, which can
            perform CRUD operations. I'm currently looking for{" "}
            <span className="font-semibold">internship opportunities</span>. I
            want to use my precious knowledge to assist companies in various
            aspects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <ul>
            {aboutSec.sec1.map(({ id, title, desc }) => (
              <li key={id} className="flex items-center mb-[15px]">
                <MdOutlineKeyboardArrowRight size={25} color="#ff014f" />
                <p className="text-gray-300 font-semibold md:text-[20px]">
                  <span className="text-[20px] md:text-[26px] mr-[8px] text-white font-bold">
                    {title}:
                  </span>
                  {desc}
                </p>
              </li>
            ))}
          </ul>
          <ul>
            {aboutSec.sec2.map(({ id, title, desc }) => (
              <li key={id} className="flex items-center mb-[15px]">
                <MdOutlineKeyboardArrowRight size={25} color="#ff014f" />
                <p className="text-gray-300 font-semibold md:text-[20px]">
                  <span className="text-[20px] md:text-[26px] mr-[8px] text-white font-bold">
                    {title}:
                  </span>
                  {desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
