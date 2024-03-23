import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => (
  <div
    name="home"
    className="min-h-[100vh] w-full bg-gradient-to-b from-black via-black to-gray-800 py-[100px] flex flex-col justify-center items-center"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full mb-[30px]">
        <h2 className="text-4xl sm:text-6xl font-bold text-white">
          I'm a Full Stack Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
          I am aspiring Full Stack developer. I have bulit various websites
          deployed them online.
        </p>

        <div>
          <Link
            smooth
            duration={500}
            to="portfolio"
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
      </div>

      <div className=" md:w-[50%]">
        <img
          src={HeroImage}
          alt="my profile"
          className="rounded-2xl mx-auto w-[60%] md:w-[100%] lg:w-[90%]"
        />
      </div>
    </div>
  </div>
);

export default Home;
