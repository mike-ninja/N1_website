"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";

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
        Design your website with (M) Studio
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
        <h2 className="section_heading">OUR MISSION</h2>
        <div className="flex flex-col gap-7">
          <p>
            We are a web agency based in Cairns, Australia. Our mission is to
            help small businesses gain a competitive advantage in the digital
            world by enhancing accessibility to potential customers. We design
            and code professional websites for your business.
          </p>
          <p>
            (M) Studio is with you every step of the way - from briefing &
            prototyping to publishing & maintenance.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-1 underline group"
          >
            Contact us today to book a free consultation!{" "}
            <FaLongArrowAltRight className="group-hover:translate-x-1 transition_config" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}