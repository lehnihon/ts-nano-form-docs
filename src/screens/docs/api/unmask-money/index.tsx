import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { unmaskMoneyCode } from "./codes";

export default function UnmaskMoney() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>UnmaskMoney</TitleText>
        <Text className="mb-4">Unmask money text</Text>
        <Code className="mb-4" code={`unmaskMoney(value: string)`} />
        <div>
          <Highlight code={unmaskMoneyCode} />
        </div>
      </section>
    </>
  );
}
