import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import { setRulesMaskCode } from "./codes";
import Code from "@/components/Code";

export default function SetRulesMask() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SetRulesMask</TitleText>
        <Text className="mb-4">Change mask rules</Text>
        <Code className="mb-4" code={`setRulesMask(rules: MaskOptions)`} />
        <div>
          <Highlight code={setRulesMaskCode} />
        </div>
      </section>
    </>
  );
}
