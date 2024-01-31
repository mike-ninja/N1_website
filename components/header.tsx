"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative h-screen flex">
      <div className="section_container relative z-10">
        <Heading />
        <CallToAction />
      </div>
      <BackgroundImage />
    </header>
  );
}

function Heading() {
  return (
    <div className="absolute top-1/4 left-0">
      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 70,
          duration: 1.5,
          delay: 0.1,
        }}
      >
        <p className="text-gray-300">
          designing & coding professional websites
        </p>
        <h1 className="text-7xl lg:text-8xl xl:text-9xl tracking-tight my-7">
          LET US CREATE A<br />WEBSITE FOR <br />YOUR BUSINESS
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
        className="grid grid-cols-2 gap-x-16 w-fit"
      >
        <p>Based in Cairns, Australia</p>
        <p className="col-start-2">Designing</p>
        <p className="col-start-2">Publishing</p>
        <p className="col-start-2">SEO Optimization</p>
        <p className="col-start-2">Maintenance</p>
      </motion.div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="absolute bottom-16 right-5">
      <Image
        src="/call-to-action-text.svg"
        alt="call to action"
        height={200}
        width={200}
        className="animate-[spin_10s_linear_infinite]"
      />
    </div>
  );
}

function BackgroundImage() {
  return (
    <Image
      fill
      src="/header-bg.webp"
      alt="header background"
      className="object-cover saturate-50 z-0"
    />
  );
}
