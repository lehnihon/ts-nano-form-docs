"use client";

import Highlight from "@/components/Highlight";
import { Text, TitleText } from "@/components/typograph";
import React from "react";
import { vanillaHtmlCode, vanillaTsCode } from "./codes";

export default function VanillaJsExample() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Vanilla JS</TitleText>
        <Text className="mb-4">Html code</Text>
        <div>
          <Highlight code={vanillaHtmlCode} />
        </div>
        <Text className="mt-4 mb-4">Typescript code</Text>
        <div>
          <Highlight code={vanillaTsCode} />
        </div>
      </section>
    </>
  );
}
