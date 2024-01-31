"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { portfolio } from "@/lib/const-data";
import { TbArrowBadgeRight } from "react-icons/tb";

export type PortfolioType = typeof portfolio[number];

export default function Portfolio() {
  return (
    <section className="py-24 flex justify-center items-center">
      <div className="section_container">
        <div className="relative flex flex-col gap-8 items-center cursor-pointer">
          {portfolio.map((item, index) => (
            <Fragment key={index}>
              <PortfolioItem {...item} />
            </Fragment>
          ))}
        </div>
        <h2 className="text-7xl font-normal uppercase tracking-tight group-hover:text-pink-600 transition_config text-right mt-24">
          Your Website Is Next
        </h2>
      </div>
    </section>
  );
}

function PortfolioItem(portfolio: PortfolioType) {
  const imageMotion = {
    hidden: {
      zIndex: -1,
      opacity: 0,
      transition: { duration: 0.4, type: "tween", ease: "easeOut" },
    },
    hover: {
      zIndex: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="hidden"
      whileHover="hover"
      className="group flex items-center"
    >
      <motion.div
        variants={imageMotion}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-96 w-[700px] relative">
          <Image
            fill
            src={portfolio.image}
            alt={portfolio.title}
            className="object-cover saturate-50"
          />
        </div>
      </motion.div>
      <Link
        href={portfolio.link}
        target="_blank"
        rel="noreferrer"
        className="text-7xl font-normal uppercase tracking-tight group-hover:text-pink-600 transition_config z-40"
      >
        {portfolio.title}
      </Link>
      <motion.span
        variants={imageMotion}
        className="absolute right-10"
      >
        <TbArrowBadgeRight className="text-9xl text-pink-600 z-40" />
      </motion.span>
    </motion.div>
  );
}
