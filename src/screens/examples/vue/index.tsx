"use client";

import Highlight from "@/components/Highlight";
import { TitleText } from "@/components/typograph";
import React from "react";
import { vueCode } from "./codes";

export default function VueExample() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Vue</TitleText>
        <div>
          <Highlight code={vueCode} />
        </div>
      </section>
    </>
  );
}
