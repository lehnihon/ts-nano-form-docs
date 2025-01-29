"use client";

import Highlight from "@/components/Highlight";
import { TitleText } from "@/components/typograph";
import React from "react";
import { zodCode } from "./codes";

export default function ZodExample() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Zod</TitleText>
        <div>
          <Highlight code={zodCode} />
        </div>
      </section>
    </>
  );
}
