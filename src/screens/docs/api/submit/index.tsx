import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import { submitCode } from "./codes";
import Code from "@/components/Code";

export default function Submit() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Submit</TitleText>
        <Text className="mb-4">Submit store values</Text>
        <Code className="mb-4" code={`submit(fetcher: (values: T) => void)`} />
        <div>
          <Highlight code={submitCode} />
        </div>
      </section>
    </>
  );
}
