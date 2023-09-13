import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-7">
          Hello! My name is Mahmoud Mira. I am a software engineer who is
          passionate about programming in general, I studied at the Institute of
          Information Technology at track mearn stack and especially web
          development as a Front End Developer .
        </p>
      </div>
    </div>
  );
};

export default About;
