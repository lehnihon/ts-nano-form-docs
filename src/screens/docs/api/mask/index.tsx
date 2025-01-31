import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { maskCode } from "./codes";

export default function Mask() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Mask</TitleText>
        <Text className="mb-4">Mask text</Text>
        <Code
          className="mb-4"
          code={`mask(value: string, maskRule: string | string[], maskOptions?: MaskOptions)`}
        />
        <div>
          <Highlight code={maskCode} />
        </div>
      </section>
    </>
  );
}
