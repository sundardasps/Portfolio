import React from "react";

function About() {
  return (
    <div className="flex h-screen mt-28 ">
      <div className="flex my-16 mx-auto w-[90%]   ">
        <div className="w-2/3 p-2 ">
          <h1 className=" text-5xl   md:text-8xl ">
            I'am <br />
            SUNDARDAS <br />
            <div className="flex">
              PS
              <div className="text-sm text-[#464d3f] flex flex-col my-auto mx-5 ">
                <span className="lg:block hidden">
                  Experienced full stack developer proficient in the MERN
                  MongoDB, Express.js, React, Node.js stack, recognized for a
                  proven track record and a commitment to being a collaborative
                  team player. Fueled by a genuine passion for technology,
                  consistently delivering high-quality solutions
                </span>
                <span className="md:hidden">Web developer</span>
              </div>{" "}
            </div>
          </h1>
          <div className="flex p-2 gap-5">
            <button className="bg-[#59871b] h-min rounded-md p-2 active:bg-[#A8FE39] active:scale-105 active:text-black ">
              Contact
            </button>
            <button className="bg-[#59871b] h-min w-max rounded-md p-2 active:bg-[#A8FE39] active:scale-105 active:text-black ">
              Resume
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/3 "></div>
      </div>
    </div>
  );
}

export default About;
