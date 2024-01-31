"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { process } from "@/lib/const-data";
import { TbArrowBadgeRight } from "react-icons/tb";

export type ProcessType = typeof process[number];

export default function Process() {
  return (
    <section>
      <div className="section_container">
        <div className="grid grid-cols-2 mb-10">
          <h2 className="xl:text-5xl">PROCESS</h2>
          <p>
            At (M) Studio, we code unique websites, not simply using popular
            templates. With (M) Studio, you only pay once.
          </p>
        </div>
        <div className="relative grid grid-cols-3 gap-5">
          {process.map((process, index) => (
            <Fragment key={index}>
              <ProcessCard {...{ ...process, delay: index + 1 }} />
            </Fragment>
          ))}
          <TbArrowBadgeRight className="absolute top-1/3 left-1/3 text-9xl text-pink-600 -translate-x-1/3 z-10" />
          <TbArrowBadgeRight className="absolute top-1/3 left-2/3 text-9xl text-pink-600 -translate-x-1/3 z-10" />
        </div>
      </div>
    </section>
  );
}

function ProcessCard(
  process: ProcessType & { delay: number },
) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -10 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        duration: 0.5,
        delay: process.delay * 0.2,
      }}
      className="relative group flex flex-col items-center min-h-[500px] rounded-lg overflow-hidden"
    >
      <Image
        fill
        src="/mission-image.webp"
        alt="Website Designer Cairns"
        className="object-cover blur-sm saturate-50 opacity-0 group-hover:opacity-100 transition_config !duration-500"
      />
      <h3 className="text-pink-600 xl:text-[10rem] z-10 font-medium drop-shadow-2xl shadow-cyan-50">
        {process.step}
      </h3>
      <h4 className="-mt-5 mb-4 xl:text-4xl z-10 font-medium">
        {process.title}
      </h4>
      <ul className="z-10">
        {process.steps.map((process, index) => (
          <li key={index} className="text-center text-lg">{process}</li>
        ))}
      </ul>
    </motion.div>
  );
}
