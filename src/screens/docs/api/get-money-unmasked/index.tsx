import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getMoneyUnmaskedCode } from "./codes";

export default function GetMoneyUnmasked() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetMoneyUnmasked</TitleText>
        <Text className="mb-4">
          Get unmasked money without changing the store
        </Text>
        <Code className="mb-4" code={`getMoneyUnmasked(): string`} />
        <div>
          <Highlight code={getMoneyUnmaskedCode} />
        </div>
      </section>
    </>
  );
}
