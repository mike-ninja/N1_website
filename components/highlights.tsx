"use client";

import { LuPlus } from "react-icons/lu";
import React, { Fragment, useState } from "react";
import { highlights } from "@/lib/const-data";
import { TfiLineDotted } from "react-icons/tfi";
import { AnimatePresence, motion } from "framer-motion";

type HighlightLine = typeof highlights[number];

export default function Highlights() {
  return (
    <section>
      <div className="section_container">
        <KeyWords />
        <HighlightLines />
      </div>
    </section>
  );
}

function KeyWords() {
  return (
    <div className="flex flex-col overflow-hidden text-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      <motion.div
        initial={{ opacity: 0, translateX: -50 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.5 }}
        className="flex flex-nowrap gap-5 items-center justify-end"
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
        className="flex flex-nowrap gap-5 items-center"
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

function HighlightLines() {
  return (
    <div className="flex flex-col gap-7 mt-10">
      {highlights.map((item, index) => (
        <div key={index} className="relative">
          <HighlightLine {...item} />
          <hr className="border-2 border-pink-700 mt-2" />
        </div>
      ))}
    </div>
  );
}

function HighlightLine(highlight: HighlightLine) {
  const [open, setOpen] = useState<boolean>(false);
  const variants = {
    active: {
      rotate: 45,
      transition: { type: "spring", duration: 0.5 },
    },
    inactive: {
      rotate: 0,
      transition: { type: "spring", duration: 0.5 },
    },
  };

  const handleOpen = (prev: boolean) => {
    setOpen(!prev);
  };

  return (
    <div onClick={() => handleOpen(open)} className="cursor-pointer">
      <h3 className="text-2xl md:text-3xl lg:text-4xl">{highlight.title}</h3>
      <button
        type="button"
        onClick={() => handleOpen(open)}
        className="absolute top-2 right-2"
      >
        <motion.span
          variants={variants}
          initial="inactive"
          animate={open ? "active" : "inactive"}
          className="text-pink-700 text-2xl flex"
        >
          <LuPlus />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="text-sm leading-tight md:mt-2"
          >
            {highlight.description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
