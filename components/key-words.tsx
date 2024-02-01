import React from "react";
import { TfiLineDotted } from "react-icons/tfi";

export default function KeyWords() {
  return (
    <section>
      <div className="section_container flex flex-col overflow-hidden text-nowrap">
        <div className="flex flex-nowrap gap-5 items-center justify-end text-7xl">
          <span className="text-pink-600">
            <TfiLineDotted />
          </span>
          <h3>TAILORED</h3>
          <span className="text-pink-600">
            <TfiLineDotted />
          </span>
          <h3>UNIQUE</h3>
        </div>
        <div className="flex flex-nowrap gap-5 items-center text-7xl">
          <h3>DESIGN</h3>
          <span className="text-pink-600">
            <TfiLineDotted />
          </span>
          <h3>WEB DEVELOPMENT</h3>
          <span className="text-pink-600">
            <TfiLineDotted />
          </span>
        </div>
      </div>
    </section>
  );
}
