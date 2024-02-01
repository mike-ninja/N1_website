"use client";
import React, { Fragment } from "react";
import { TfiLineDotted } from "react-icons/tfi";
import { highlights } from "@/lib/const-data";
import { motion } from "framer-motion";

type HighlightType = typeof highlights[number];

export default function Highlights() {
  return (
    <section>
      <div className="section_container">
        <KeyWords />
        <div className="flex flex-col gap-7 mt-10">
          {highlights.map((item, index) => (
            <Fragment key={index}>
              <Highlight {...item} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyWords() {
  return (
    <div className="flex flex-col overflow-hidden text-nowrap">
      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        className="flex flex-nowrap gap-5 items-center justify-end text-7xl"
      >
        <span className="text-pink-600">
          <TfiLineDotted />
        </span>
        <h3>TAILORED</h3>
        <span className="text-pink-600">
          <TfiLineDotted />
        </span>
        <h3>AFFORDABLE</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.8 }}
        className="flex flex-nowrap gap-5 items-center text-7xl"
      >
        <h3>RESPONSIVE</h3>
        <span className="text-pink-600">
          <TfiLineDotted />
        </span>
        <h3>MAINTENANCE</h3>
        <span className="text-pink-600">
          <TfiLineDotted />
        </span>
      </motion.div>
    </div>
  );
}

function Highlight(highlight: HighlightType) {
  const highlightMotion = {
    hidden: {
      height: 8,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      height: "100%",
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="hidden"
      whileTap="hover"
      whileFocus="hover"
      whileHover="hover"
      className="group relative cursor-none flex pt-4"
    >
      <motion.div
        variants={highlightMotion}
        className="absolute top-0 left-0 w-full px-2 bg-pink-600 overflow-hidden group-hover:rounded-sm flex justify-center items-center"
      >
        <p className="my-2 hidden group-hover:block">{highlight.description}</p>
      </motion.div>
      <h3 className="xl:text-3xl">{highlight.title}</h3>
    </motion.div>
  );
}
