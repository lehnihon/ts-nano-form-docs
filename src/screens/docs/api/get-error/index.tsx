import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getErrorCode } from "./codes";

export default function GetError() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetError</TitleText>
        <Text className="mb-4">Get the store error</Text>
        <Code className="mb-4" code={`getError(): string`} />
        <div>
          <Highlight code={getErrorCode} />
        </div>
      </section>
    </>
  );
}
