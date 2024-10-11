import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getMoneyMaskedCode } from "./codes";

export default function GetMoneyMasked() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetMoneyMasked</TitleText>
        <Text className="mb-4">
          Get masked money without changing the store
        </Text>
        <Code
          className="mb-4"
          code={`getMoneyMasked(maskRule: string): string`}
        />
        <div>
          <Highlight code={getMoneyMaskedCode} />
        </div>
      </section>
    </>
  );
}
