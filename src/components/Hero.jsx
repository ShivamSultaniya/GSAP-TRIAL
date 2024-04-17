import React from "react";


import WomanHero from "../img/woman_hero.png";
import leaf from "../img/leaf.png";
import gsap from "gsap";

import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <section
      className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24"
      id="heroPage"
    >
    
      <div className="fixed z-9 -mt-30" id = "leaf">
        <img src={leaf} alt="leaf" className="w-20" />
      </div>
      <div className="container mx-auto flex justify-around h-full z-10">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-1.1 font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
        </div>
        <div className="hidden lg:block ">
          <img src={WomanHero} alt="womanHero" />
        </div>
      </div>
    </section>
  );
};

window.onload = () => {
    const heroPage = document.querySelector("#heroPage");
    const leafMove = document.querySelectorAll("#leaf");
  
    heroPage.addEventListener("mousemove", function (dets) {
      gsap.to(leafMove, {
        x: (dets.x)/50,
        y: (dets.y)/50,
      });
    });
  };

export default Hero;
