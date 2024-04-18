"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Span } from "next/dist/trace";

function Navbar() {
  const [open, setOPen] = useState(false);

  //-------------- Framer motion helpers ------------//

  const topAarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
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
      rotate: -45,
      backgroundColor: "rgb(255 ,255,255)",
    },
  };

  const navList = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  const name = ["S", "U", "N", "D", "A", "R", "D", "A", "S", "-", "P", "S"];

  return (
    <div className="h-20 bg-[#1E2029] w-screen flex justify-around">
      <h1 className="m-auto text-3xl flex ">
        <motion.span initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} className="text-[#A8FE39] text-6xl m-1">&#10100;</motion.span>
        {name.map((letter) => (
          <motion.div
            initial={{scale:0}}
            animate={{scale:1}}
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 500, damping: 10 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="cursor-pointer m-auto"
          >
            {letter}
          </motion.div>
        ))}
        <motion.span initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} className="text-[#A8FE39] text-6xl m-1">&#10101;</motion.span>
      </h1>
      <ul className=" m-auto gap-5 md:flex hidden">
        {navList.map(({ name, href }) => (
          <motion.li
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            key={name}
            className="hover:bg-[#A8FE39] rounded-xl p-1"
          >
            <a href={href}>{name}</a>
          </motion.li>
        ))}
      </ul>
      {
        <div className={`${!open && "md:hidden"} m-auto`} >
          <button onClick={()=>setOPen(curr=>!curr)} className="flex flex-col justify-between gap-1 z-50 relative ">
            <motion.div variants={topAarients} animate={open ? "opened" : "closed"} className="bg-[#A8FE39] h-1 w-10 rounded-lg origin-left"></motion.div>
            <motion.div variants={centerVarients} animate={open ? "opened" : "closed"}  className="bg-[#A8FE39] h-1 w-10 rounded-lg"></motion.div>
            <motion.div variants={bottomVarients}  animate={open ? "opened" : "closed"} className="bg-[#A8FE39] h-1 w-10 rounded-lg origin-left"></motion.div>
          </button>
        </div>
      }
    </div>
  );
}

export default Navbar;
