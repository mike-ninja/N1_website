"use client";
import React from "react";
import { motion } from "framer-motion";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";

export default function WorkWithUs() {
  return (
    <section>
      <div className="section_container overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 150 }}
          transition={{ duration: 3, type: "linear", repeat: Infinity }}
          className="flex items-center"
        >
          <h3 className="xl:text-7xl">WORK WITH US</h3>
          <TbArrowBadgeRight className="text-9xl text-pink-600" />
        </motion.div>
        <motion.div
          initial={{ x: "full" }}
          animate={{ x: -150 }}
          transition={{ duration: 3, type: "linear", repeat: Infinity }}
          className="flex items-center justify-end"
        >
          <TbArrowBadgeLeft className="text-9xl text-pink-600" />
          <h3 className="xl:text-7xl">WORK WITH US</h3>
        </motion.div>
      </div>
    </section>
  );
}
