import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { setMaskedCode } from "./codes";

export default function SetMasked() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SetMasked</TitleText>
        <Text className="mb-4">Set the store with the masked value</Text>
        <Code className="mb-4" code={`setMasked(value: string): string`} />
        <div>
          <Highlight code={setMaskedCode} />
        </div>
      </section>
    </>
  );
}
