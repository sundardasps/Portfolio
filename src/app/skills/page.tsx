import Image from "next/image";
import React from "react";
import { skillsImage } from "../../../utils/skillsImage";
import { skillsData } from "../../../utils/data/skillsName";

// import {} from '../../../public/skills'

function Skills() {
  const divStyle = {
    boxShadow: ` rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`,
  };
  return (
    <>
      <h1 className=" text-[#A8FE39] text-center font-bold text-4xl mb-5">
        Skills
      </h1>
      <div className="md:flex  h-max w-full  " id="skills">
        <div className="w-2/3 h-min  ">
          <div className=" grid grid-cols-5 md:grid-cols-5 md:grid-rows-4 gap-x-0 md:mx-16  ">
            {skillsData.map((skill, id) => (
              <div
                className="w-16 md:w-28 min-w-fit h-28 flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer  "
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-[#A8FE39] transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#A8FE39] to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center  p-3">
                    <div className="h-8 sm:h-10">
                      <Image
                        src={skillsImage(skill)?.src}
                        alt={skill}
                        width={100}
                        height={100}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-white text-sm sm:text-[0.5rem]">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/4  p-5 ">
          <p className="text-lg text-balance">
            My name is SUNDARDAS PS. I am a professional and enthusiastic
            programmer in my daily life. I am a quick learner with a
            self-learning attitude. I love to learn and explore new technologies
            and am passionate about problem-solving. I love almost all the
            stacks of web application development and love to make the web more
            open to the world. My core skill is based on JavaScript and I love
            to do most of the things using JavaScript. I am available for any
            kind of job opportunity that suits my skills and interests.
          </p>
        </div>
      </div>
    </>
  );
}

export default Skills;
