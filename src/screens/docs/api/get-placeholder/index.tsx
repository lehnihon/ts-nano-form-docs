import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getPlaceholderCode } from "./codes";

export default function GetPlaceholder() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetPlaceholder</TitleText>
        <Text className="mb-4">Get placeholder text</Text>
        <Code className="mb-4" code={`getPlaceholder(maskRule: string)`} />
        <div>
          <Highlight code={getPlaceholderCode} />
        </div>
      </section>
    </>
  );
}
