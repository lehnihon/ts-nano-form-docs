import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { setErrorCode } from "./codes";

export default function SetError() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SetError</TitleText>
        <Text className="mb-4">Set the store error</Text>
        <Code className="mb-4" code={`setError(value: string): string`} />
        <div>
          <Highlight code={setErrorCode} />
        </div>
      </section>
    </>
  );
}
