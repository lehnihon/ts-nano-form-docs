import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { setMoneyMaskedCode } from "./codes";

export default function SetMoneyMasked() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SetMoneyMasked</TitleText>
        <Text className="mb-4">Set the store with the masked money</Text>
        <Code className="mb-4" code={`setMoneyMasked(value: string): string`} />
        <div>
          <Highlight code={setMoneyMaskedCode} />
        </div>
      </section>
    </>
  );
}
