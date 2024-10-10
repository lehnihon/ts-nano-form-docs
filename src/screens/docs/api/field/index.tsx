import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import { fieldCode } from "./codes";
import Code from "@/components/Code";

export default function Field() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Field</TitleText>
        <Text className="mb-4">Field store</Text>
        <Code className="mb-4" code={`field(name: string)`} />
        <div>
          <Highlight code={fieldCode} />
        </div>
      </section>
    </>
  );
}
