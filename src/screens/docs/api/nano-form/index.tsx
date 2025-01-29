import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getErrorCode } from "./codes";

export default function NanoForm() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>NanoForm</TitleText>
        <Text className="mb-4">Create main object</Text>
        <Code className="mb-4" code={`getError(): string`} />
        <div>
          <Highlight code={getErrorCode} />
        </div>
      </section>
    </>
  );
}
