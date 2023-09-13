import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import HeroImage from "./images/IMG_5319.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            🙋 I am a super front-end developer, which allows me to provide the
            highest-quality services in the shortest period. React developer.
            building responsive websites. creative web design by Ui / UX. Also,
            I have experience in NodeJS development.
          </p>
          <Link to="portfolio" smooth duration={500}>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRightShort size={25} className="ml-1" />
              </span>
            </button>
          </Link>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my portfolio"
            className="rounded-2xl mx-auto w-2/3  md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
