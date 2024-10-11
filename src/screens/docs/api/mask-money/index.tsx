import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { maskMoneyCode } from "./codes";

export default function MaskMoney() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>MaskMoney</TitleText>
        <Text className="mb-4">Mask money text</Text>
        <Code className="mb-4" code={`maskMoney(value: string)`} />
        <div>
          <Highlight code={maskMoneyCode} />
        </div>
      </section>
    </>
  );
}
