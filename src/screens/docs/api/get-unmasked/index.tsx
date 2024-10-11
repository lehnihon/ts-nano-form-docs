import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getUnmaskedCode } from "./codes";

export default function GetUnmasked() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetUnmasked</TitleText>
        <Text className="mb-4">
          Get unmasked value without changing the store
        </Text>
        <Code className="mb-4" code={`getUnmasked(maskRule: string): string`} />
        <div>
          <Highlight code={getUnmaskedCode} />
        </div>
      </section>
    </>
  );
}
