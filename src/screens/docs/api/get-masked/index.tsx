import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getMaskedCode } from "./codes";

export default function GetMasked() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetMasked</TitleText>
        <Text className="mb-4">
          Get masked value without changing the store
        </Text>
        <Code
          className="mb-4"
          code={`getMasked(maskRule: string | string[]): string`}
        />
        <div>
          <Highlight code={getMaskedCode} />
        </div>
      </section>
    </>
  );
}
