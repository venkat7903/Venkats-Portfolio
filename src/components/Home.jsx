import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
//import HeroImage from "../assets/heroImage.png";
import HeroImage from "../assets/heroImage1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import MobileSocialLinks from "./MobileSocialLinks";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Backend Developer.", "Programmer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div
      name="home"
      className="min-h-[100vh] w-full bg-gradient-to-b from-black via-black to-gray-800 py-[100px] flex flex-col justify-center items-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="mb-[45px] flex flex-col justify-center h-full">
          <p className="text-gray-500 font-semibold mb-[10px]">
            WELCOME TO MY WORLD
          </p>
          <h2 className="mb-[20px] text-6xl sm:text-6xl font-bold text-white inline">
            Hi, I'm
            <span className="ml-[20px]" style={{ color: "#ff014f" }}>
              Venkat
            </span>
          </h2>

          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ff014f" />
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
          <MobileSocialLinks />
        </div>

        <div className="md:w-[50%]">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[60%] md:w-[100%] lg:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
