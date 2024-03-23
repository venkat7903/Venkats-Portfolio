/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-scroll";

import nxtTrendz from "../assets/portfolio/nxttrendz.png";
import nxtWatch from "../assets/portfolio/nxtwatch.png";
import jobby from "../assets/portfolio/jobby.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nxtTrendz,
      demo: "https://venkatsnxttrend.ccbp.tech/",
      code: "https://github.com/venkat7903/Nxt-Trendz-Ecommerce-App.git",
    },
    {
      id: 2,
      src: nxtWatch,
      demo: "https://venkatsnxtwatch.ccbp.tech/",
      code: "https://github.com/venkat7903/Venkats-Nxt-Watch.git",
    },
    {
      id: 3,
      src: jobby,
      demo: "https://jobbyfinder.ccbp.tech/",
      code: "https://github.com/venkat7903/Jobby-App.git",
    },
  ];

  return (
    <div
      name="portfolio"
      className="pb-[40px] bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                className="rounded-md duration-200 hover:scale-105 h-[180px]  w-full"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
