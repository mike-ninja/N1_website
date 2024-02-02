"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { company, process } from "@/lib/const-data";
import { IoMdArrowRoundForward } from "react-icons/io";

type ProcessType = typeof process[number];

export default function Process() {
  return (
    <section>
      <div className="section_container flex flex-col">
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.5,
            delay: 0.2,
          }}
          className="grid grid-cols-1 lg:grid-cols-2 heading_margin"
        >
          <h2 className="section_heading lg:text-5xl">PROCESS</h2>
          <p className="text-sm xl:text-base">
            At{" "}
            {company.name}, we code unique websites via modern practices for the
            best user experience & search engine results. We are independent
            from website builder platforms that requires huge recurring fees,
            therefore, you only pay us once for the delivery of your website.
          </p>
        </motion.div>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
          {process.map((process, index) => (
            <Fragment key={index}>
              <ProcessCard {...{ ...process, delay: index + 1 }} />
            </Fragment>
          ))}
          <motion.span
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.5,
              delay: 0.5,
            }}
            className="absolute top-1/3 left-1/3 z-10 hidden lg:block"
          >
            <IoMdArrowRoundForward className="text-7xl xl:text-8xl 2xl:text-9xl text-pink-600 -translate-y-1/2 -translate-x-1/2" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.5,
              delay: 0.5,
            }}
            className="absolute top-1/3 left-2/3 z-10 hidden lg:block"
          >
            <IoMdArrowRoundForward className="text-7xl xl:text-8xl 2xl:text-9xl  text-pink-600 -translate-y-1/2 -translate-x-1/2" />
          </motion.span>
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
      className="relative group flex w-2/3 even:ml-auto md:w-full flex-col justify-center md:justify-start items-center min-h-[270px] lg:min-h-[330px] xl:min-h-[400px] rounded-lg xl:pt-6 overflow-hidden cursor-default"
    >
      <Image
        fill
        src="/process-bg.webp"
        alt="Website Designer Cairns"
        className="object-cover blur-sm saturate-50 xl:opacity-0 group-hover:opacity-100 transition_config !duration-500"
      />
      <h3 className="text-pink-600 text-9xl xl:text-[10rem] z-10 font-medium drop-shadow-2xl shadow-cyan-50">
        {process.step}
      </h3>
      <h4 className="mb-4 text-3xl xl:text-4xl z-10 font-medium">
        {process.title}
      </h4>
      <ul className="z-10">
        {process.steps.map((process, index) => (
          <li key={index} className="text-center xl:text-lg">{process}</li>
        ))}
      </ul>
    </motion.div>
  );
}
