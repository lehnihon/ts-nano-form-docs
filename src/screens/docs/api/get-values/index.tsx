import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getValuesCode } from "./codes";

export default function GetValues() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetValues</TitleText>
        <Text className="mb-4">Get all store values</Text>
        <Code className="mb-4" code={`getValues(): T`} />
        <div>
          <Highlight code={getValuesCode} />
        </div>
      </section>
    </>
  );
}
