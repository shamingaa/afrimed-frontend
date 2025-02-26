import React from "react";
import HeroImg from "../../assests/landingpage/hero.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full p-10 md:px-28 md:py-16 bg-[#FCFCF7]"
      id="home"
    >
      <div className=" mx-auto text-center px-4 md:px-16">
        <p className="font-bold text-3xl md:text-5xl">
          {" "}
          A world where
          <span className="font-normal text-[#5D34F3] italic "> healthcare</span> is not
          just a service but an experience
        </p>
        <p className="font-normal text-sm md:text-xl text-black/80 mt-2 md:mt-4">
          Our AI-powered doctor-patient consultation platform brings the
          expertise of medical professionals right to your fingertips,
          revolutionizing the way you access healthcare.
        </p>
      </div>
      <div className="my-5 md:my-10 flex items-center gap-4">
        <button className="text-xs font-bold py-4 px-12   text-white bg-[#5D34F3] rounded-lg">Join now</button>
        <Link to="/heart-classification">
        <button
          
          className="text-xs font-bold py-4 px-5 text-[#5D34F3] border border-[#5D34F3] rounded-lg"
        >
          Get your heart tested for free
        </button>
        </Link>
      </div>
      <div className="border-t-8 border-x-8 border-spacing-x-11 border-black my-10 md:my-16 rounded-t-xl">
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
