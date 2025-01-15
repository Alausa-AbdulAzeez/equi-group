import React from "react";
import { heroImg, heroImg2, heroImg3 } from "../assets/images";
import { Icon } from "@iconify/react";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  // Inline style to set the background image

  const bgImage =
    "https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const headerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="w-full bg-white text-secondary h-[calc(100vh-90px)] max-h-[620px] flex justify-center z-10"

      //   style={headerStyle}
    >
      {/* Main container */}
      <section
        id="hero"
        className="w-full flex items-center h-full app__container px-[48px] py-10"
      >
        {/* Hero left */}
        <div className="relative flex flex-col gap-10 w-full  justify-center">
          {/* top - (Title and Sub title) */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-5 font-bold text-[20px]  md:text-left text-left w-full ">
              Invest in Africa's future.
            </div>

            <div className=" font-bold  text-[50px] leading-[56px] text-left">
              Partner with EQUISERVE <br /> for sustainable finance <br />{" "}
              solutions.
            </div>
          </div>

          {/* Bottom - CTA */}
          {/* RHS */}
          <div className="group w-fit bg-primary py-3 px-6 rounded-md flex items-center relative cursor-pointer">
            {/* <div className="group w-fit  flex items-center relative cursor-pointer"> */}
            <div className="text-secondary text-[16px] font-semibold mr-4 group-hover:underline hover:underline-offset-2">
              Learn more
            </div>
            <div className="w-fit overflow-hidden flex items-center">
              <img
                src={arrowRight}
                alt="Arrow right"
                className="hover-slide-in-top transition-all ease-linear"
              />
            </div>
          </div>

          {/* Hero Image */}
          <div className="absolute right-10 2xl:right-20">
            <img
              src={heroImg3}
              alt=""
              className="h-[400px] 2xl:h-[500px] w-auto"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;