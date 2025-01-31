import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { unmaskCode } from "./codes";

export default function Unmask() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Unmask</TitleText>
        <Text className="mb-4">Unmask text</Text>
        <Code
          className="mb-4"
          code={`unmask(value: string,  maskOptions?: MaskOptions)`}
        />
        <div>
          <Highlight code={unmaskCode} />
        </div>
      </section>
    </>
  );
}
