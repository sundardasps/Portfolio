"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";


function Navbar() {
  const [open, setOPen] = useState(false);

  //-------------- Framer motion helpers ------------//

  const topAarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 40,
      backgroundColor: "rgb(255 ,255,255)",
    },
  };

  const centerVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -40,
      backgroundColor: "rgb(255 ,255,255)",
    },
  };

  const navList = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const name = ["S", "U", "N", "D", "A", "R", "D", "A", "S", "-", "P", "S"];

  const handleOpen = () => {};

  return (
    <div className="fixed bg-[#1E2029] left-0 right-0 top-0 z-50">
      <div className="h-20  flex justify-between m-auto container  ">
        <h1 className="m-auto  text-xl md:text-3xl flex  ">
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-[#A8FE39] text-4xl md:text-6xl m-1"
          >
            &#10100;
          </motion.span>
          {name.map((letter) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              className="cursor-pointer m-auto hover:text-[#EDFF08]"
            >
              {letter}
            </motion.div>
          ))}
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-[#A8FE39] text-4xl md:text-6xl m-1"
          >
            &#10101;
          </motion.span>
        </h1>

        <div className={`flex justify-end m-auto  w-2/4 `}>
          <ul className=" m-auto gap-5 md:flex hidden">
            {navList.map(({ name, href }, index) => (
              <motion.li
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={name}
                className="hover:bg-[#A8FE39] rounded-xl p-1"
              >
                <motion.a href={href}>{name}</motion.a>
              </motion.li>
            ))}
          </ul>
          <button
            onClick={() => setOPen((curr) => !curr)}
            className={`flex flex-col justify-between gap-[0.5rem] z-50 relative mx-5  ${
              !open && "md:hidden"
            }`}
          >
            <motion.div
              variants={topAarients}
              animate={open ? "opened" : "closed"}
              className="bg-[#A8FE39] h-1 w-8 rounded-lg origin-left"
            ></motion.div>
            <motion.div
              variants={centerVarients}
              animate={open ? "opened" : "closed"}
              className="bg-[#A8FE39] h-1 w-8 rounded-lg"
            ></motion.div>
            <motion.div
              variants={bottomVarients}
              animate={open ? "opened" : "closed"}
              className="bg-[#A8FE39] h-1 w-8 rounded-lg origin-left"
            ></motion.div>
          </button>
        </div>
        {open && (
          <div className="absolute w-2/3 bg-[#A8FE39] h-screen   right-0 flex items-center justify-center  ">
            <ul className=" text-2xl gap-5 flex flex-col  ">
              {navList.map(({ name, href }, index) => (
                <motion.li
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  key={name}
                  className="font-bold rounded-xl p-1"
                >
                  <motion.a href={href}>{name}</motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
