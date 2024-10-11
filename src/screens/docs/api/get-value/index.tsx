import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getValueCode } from "./codes";

export default function GetValue() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetValue</TitleText>
        <Text className="mb-4">Get store value</Text>
        <Code className="mb-4" code={`getValue(): string`} />
        <div>
          <Highlight code={getValueCode} />
        </div>
      </section>
    </>
  );
}
