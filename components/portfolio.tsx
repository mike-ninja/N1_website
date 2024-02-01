"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { portfolio } from "@/lib/const-data";

export type PortfolioType = typeof portfolio[number];

export default function Portfolio() {
  return (
    <section className="py-24 flex justify-center items-center">
      <div className="section_container">
        <div className="relative grid grid-cols-1 gap-8 cursor-pointer">
          {portfolio.map((item, index) => (
            <Fragment key={index}>
              <PortfolioItem {...item} />
            </Fragment>
          ))}
        </div>
        <motion.h2
          initial={{ opacity: 0, translateX: -100 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          className="text-4xl italic font-normal uppercase tracking-tight group-hover:text-pink-600 transition_config text-right mt-24"
        >
          Your Website Is Next
        </motion.h2>
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
        <div className="h-[450px] w-[800px] relative">
          <Image
            fill
            src={portfolio.image}
            alt={portfolio.title}
            className="object-cover saturate-50"
          />
        </div>
      </motion.div>
      {portfolio.link !== ""
        ? (
          <Link
            href={portfolio.link}
            target="_blank"
            rel="noreferrer"
            className="z-40"
          >
            <h2 className="text-7xl font-normal uppercase tracking-tight group-hover:text-pink-600 transition_config">
              {portfolio.title}
            </h2>
          </Link>
        )
        : (
          <div className="z-40">
            <h2 className="text-7xl font-normal uppercase tracking-tight group-hover:text-pink-600 transition_config cursor-default text-right">
              {portfolio.title}
            </h2>
            <h3 className="italic text-3xl group-hover:text-pink-600 text-right">
              Coming Soon
            </h3>
          </div>
        )}
    </motion.div>
  );
}
