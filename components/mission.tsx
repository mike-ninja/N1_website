"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { company, highlights } from "@/lib/const-data";
import { FaLongArrowAltRight } from "react-icons/fa";

export type HightlightType = typeof highlights[number];

export default function Mission() {
  return (
    <section>
      <div className="section_container grid lg:grid-cols-2 lg:gap-5 xl:gap-10 2xl:gap-16">
        <MissionImage />
        <MissionText />
      </div>
    </section>
  );
}

function MissionImage() {
  return (
    <div className="relative h-[400px] xl:h-[600px] hidden lg:block">
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
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        ...transition,
        delay: 0.6,
      }}
      className="flex flex-col justify-center"
    >
      <h2 className="section_heading">
        OUR MISSION
      </h2>
      <div className="flex flex-col gap-3 lg:gap-7">
        <p>
          We are a web agency based in Cairns, Australia. Our mission is to help
          small businesses gain a competitive advantage in the digital world by
          enhancing accessibility to potential customers. We design and code
          professional websites for your business.
        </p>
        <p>
          {company.name}{" "}
          is with you every step of the way - from briefing & prototyping to
          publishing & maintenance with the ultimate goal of boosting your
          website to be <span className="italic">Number 1!</span>
        </p>
        <Link
          href="/contact"
          className="flex items-center gap-1 underline flex-wrap"
        >
          Contact us today to book a free consultation!{" "}
          <FaLongArrowAltRight className="group-hover:translate-x-1 transition_config" />
        </Link>
      </div>
    </motion.div>
  );
}
