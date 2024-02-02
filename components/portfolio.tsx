"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { portfolio } from "@/lib/const-data";

type PortfolioType = typeof portfolio[number];

export default function Portfolio() {
  return (
    <section>
      <div className="section_container flex flex-col">
        <h2 className="section_heading z-40">
          PORTFOLIO
        </h2>
        <div className="relative grid grid-cols-1 gap-3 cursor-pointer">
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
          className="text-2xl lg:text-4xl italic font-normal uppercase tracking-tight group-hover:text-pink-600 transition_config text-right z-40 mt-5"
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
      className="group flex items-center even:ml-auto even:text-right lg:even:ml-0 lg:even:text-left"
    >
      <motion.div
        variants={imageMotion}
        className="absolute top-1/2 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 -translate-y-1/2"
      >
        <div className="hidden sm:block h-[320px] md:h-[370px] lg:h-[430px] xl:h-[500px] sm:w-[620px] md:w-[700px] lg:w-[800px] relative">
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
            <h2 className="text-4xl md:text-5xl xl:text-6xl uppercase tracking-tight group-hover:text-pink-600 transition_config">
              {portfolio.title}
            </h2>
          </Link>
        )
        : (
          <div className="z-40">
            <h2 className="text-4xl md:text-5xl xl:text-6xl uppercase tracking-tight group-hover:text-pink-600 transition_config cursor-default">
              {portfolio.title}
            </h2>
            <h3 className="italic text-lg md:text-3xl group-hover:text-pink-600 text-right">
              Coming Soon
            </h3>
          </div>
        )}
    </motion.div>
  );
}
