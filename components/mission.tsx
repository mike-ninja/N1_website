"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { highlights } from "@/lib/const-data";
import { FaLongArrowAltRight } from "react-icons/fa";

export type HightlightType = typeof highlights[number];

export default function Mission() {
  return (
    <section>
      <div className="section_container grid grid-cols-2 gap-28">
        <MissionImage />
        <MissionText />
      </div>
    </section>
  );
}

function MissionImage() {
  return (
    <div className="relative h-[60rem]">
      <Image
        fill
        src="/mission-image.webp"
        alt="Web agency Cairns"
        className="object-cover"
      />
    </div>
  );
}

function MissionText() {
  const transition = {
    type: "spring",
    stiffness: 50,
    duration: 0.5,
  };

  return (
    <div>
      <motion.p
        initial={{ opacity: 0, translateX: 10 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true }}
        transition={{
          ...transition,
          delay: 0.2,
        }}
        className="text-pink-600 mb-10"
      >
        Establish your website with N1 Website Agency
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateY: -10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{
          ...transition,
          delay: 0.4,
        }}
      >
        <h2 className="section_heading xl:mb-10">OUR MISSION</h2>
        <div className="flex flex-col gap-7">
          <p>
            We are a web agency based in Cairns, Australia. Our mission is to
            help small businesses gain a competitive advantage in the digital
            world by enhancing accessibility to potential customers. We design
            and code professional websites for your business.
          </p>
          <p>
            N1 Website Agency is with you every step of the way - from briefing
            & prototyping to publishing & maintenance with the ultimate goal of
            boosting your website to be{" "}
            <span className="italic">Number 1!</span>
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-1 underline group"
          >
            Contact us today to book a free consultation!{" "}
            <FaLongArrowAltRight className="group-hover:translate-x-1 transition_config" />
          </Link>
        </div>
        <div className="flex flex-col gap-7 mt-10">
          {highlights.map((item, index) => (
            <Fragment key={index}>
              <Highlight {...item} />
            </Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Highlight(highlight: HightlightType) {
  const highlightMotion = {
    hidden: {
      height: 8,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      height: "auto",
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
      whileHover="hover"
      className="group relative cursor-none flex pt-4"
    >
      <motion.div
        variants={highlightMotion}
        className="absolute top-0 left-0 w-full px-2 bg-pink-600 overflow-hidden group-hover:rounded-sm"
      >
        <p className="my-2">{highlight.description}</p>
      </motion.div>
      <h3 className="xl:text-3xl">{highlight.title}</h3>
    </motion.div>
  );
}
