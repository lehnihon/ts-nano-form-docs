import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { setValueCode } from "./codes";

export default function SetValue() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SetValue</TitleText>
        <Text className="mb-4">Set the store value</Text>
        <Code className="mb-4" code={`setValue(value: string): string`} />
        <div>
          <Highlight code={setValueCode} />
        </div>
      </section>
    </>
  );
}
