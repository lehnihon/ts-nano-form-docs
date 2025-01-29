"use client";

import Highlight from "@/components/Highlight";
import { TitleText } from "@/components/typograph";
import React from "react";
import { yupCode } from "./codes";

export default function YupExample() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Yup</TitleText>
        <div>
          <Highlight code={yupCode} />
        </div>
      </section>
    </>
  );
}
