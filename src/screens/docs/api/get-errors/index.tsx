import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getErrorsCode } from "./codes";

export default function GetErrors() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetErrors</TitleText>
        <Text className="mb-4">Get all store errors</Text>
        <Code className="mb-4" code={`getErrors(): T`} />
        <div>
          <Highlight code={getErrorsCode} />
        </div>
      </section>
    </>
  );
}
