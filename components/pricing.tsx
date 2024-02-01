"use client";
import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { company, pricing } from "@/lib/const-data";

type PriceType = typeof pricing[number] & { delay: number };

export default function Pricing() {
  return (
    <section>
      <div className="section_container">
        <motion.p
          initial={{ opacity: 0, translateX: 10 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.5,
            delay: 0.2,
          }}
          className="text-pink-600 text-sm sm:text-base mb-5"
        >
          Establish your website with {company.name}
        </motion.p>
        <h2 className="section_heading mb-3 sm:mb-10">PRICING</h2>
        <div className="flex flex-col gap-3">
          {pricing.map((pricing, index) => (
            <Fragment key={index}>
              <PricingCard {...{ ...pricing, delay: index + 1 }} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard(price: PriceType) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -10 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 50,
        duration: 0.5,
        delay: price.delay * 0.2,
      }}
      className="border-4 border-transparent border-t-pink-600 flex flex-wrap md:grid md:grid-cols-3 items-center md:items-start pt-1"
    >
      <h3 className="text-2xl lg:text-3xl font-semibold">{price.title}</h3>
      <ul className="order-1 md:order-none pl-2 w-full lg:text-xl xl:text-2xl">
        {price.description.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
      <h3 className="text-pink-600 text-lg lg:text-xl text-bold ml-auto">
        {price.price}
      </h3>
    </motion.div>
  );
}
