"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMdArrowRoundDown } from "react-icons/io";

export default function Header() {
  return (
    <header className="relative h-[550px] sm:h-[500px] md:h-[650px] lg:h-[800px] xl:h-[900px] 2xl:h-screen flex overflow-hidden">
      <div className="section_container relative z-10">
        <Heading />
        <CallToAction />
      </div>
      <BackgroundImage />
    </header>
  );
}

// function Logo() {
//   return (
//     <div className="absolute top-2 sm:top-5 right-3 sm:right-5 z-[999]">
//       <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-tr from-pink-700 via-pink-600 to-pink-800 bg-clip-text text-transparent tracking-[-0.25rem] drop-shadow-xl opacity-90">
//         N1
//       </h1>
//     </div>
//   );
// }

function Heading() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          duration: 1.5,
          delay: 0.1,
        }}
        className="absolute top-10 md:top-24 -translate-y-1/2 left-2"
      >
        <p className="text-pink-300 italic xl:text-lg">
          Designing & coding professional websites
        </p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight my-7 drop-shadow-md">
          LET US CREATE A <br className="hidden" />WEBSITE FOR{" "}
          <br className="hidden" />YOUR BUSINESS
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: -10 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 3,
          delay: 0.5,
        }}
        className="absolute bottom-5 md:bottom-16 lg:bottom-32 left-4 grid grid-cols-2 gap-x-16 w-fit xl:text-lg"
      >
        <p>Based in Cairns, Australia</p>
        <div>
          <p>Designing</p>
          <p>Publishing</p>
          <p>SEO Optimization</p>
          <p>Maintenance</p>
        </div>
      </motion.div>
    </>
  );
}

function CallToAction() {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 10 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ type: "spring", stiffness: 50, duration: 3, delay: 1 }}
      className="hidden md:block absolute bottom-16 right-5"
    >
      <div className="relative">
        <Image
          src="/header-text.svg"
          alt="call to action"
          height={200}
          width={200}
          className="animate-[spin_10s_linear_infinite]"
        />
        <IoMdArrowRoundDown className="text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 animate-pulse" />
      </div>
    </motion.div>
  );
}

function BackgroundImage() {
  return (
    <Image
      fill
      src="/header-bg.webp"
      alt="header background"
      className="object-cover blur-sm z-0"
    />
  );
}
