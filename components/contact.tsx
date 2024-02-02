"use client";

import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import { company } from "@/lib/const-data";
import { GiSandsOfTime } from "react-icons/gi";
import { sendEmail } from "@/actions/send-emails";
import { IoMdArrowRoundForward } from "react-icons/io";

export default function contact() {
  return (
    <section className="mb-8">
      <div className="section_container grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative flex flex-col">
          <h2 className="section_heading">CONTACT US</h2>
          <p className="text-sm sm:text-base mb-2 sm:mb-3 md:mb-4 xl:mb-8">
            Please contact me direcly at{" "}
            <a
              href={`mailto:${company.email}`}
              className="underline"
            >
              {company.email}
            </a>{" "}
            or through this form.
          </p>
          <form
            action={async (formData) => {
              const { error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Email sent successfully");
            }}
            className="grow flex flex-col"
          >
            <input
              required
              type="email"
              name="senderEmail"
              maxLength={500}
              placeholder="E-mail"
              className="input_field mb-5"
            />
            <input
              required
              name="subject"
              maxLength={500}
              placeholder="Subject"
              className="input_field mb-5"
            />
            <textarea
              required
              name="message"
              maxLength={4000}
              placeholder="Describe your project"
              className="input_field"
            />
            <SubmitButton />
          </form>
        </div>
        <div className="hidden lg:block relative h-full">
          <Image
            src="/contact-image.webp"
            alt="Cairns Web Agency"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex grow justify-center lg:justify-start items-center lg:items-end mt-4">
      <button type="submit" disabled={pending} className="relative group">
        <Image
          src="/contact-text.svg"
          alt="call to action"
          height={150}
          width={150}
          className="animate-[spin_10s_linear_infinite]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
          {pending
            ? <GiSandsOfTime className="text-5xl text-pink-600" />
            : (
              <motion.span
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.3 }}
                transition={{ ease: "linear", duration: 0.1 }}
                className="opacity-60 group-hover:opacity-100 transition_config"
              >
                <IoMdArrowRoundForward className="text-6xl text-pink-600" />
              </motion.span>
            )}
        </div>
      </button>
    </div>
  );
}
