import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { setRulesMoneyCode } from "./codes";

export default function SetRulesMoney() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SetRulesMoney</TitleText>
        <Text className="mb-4">Change money rules</Text>
        <Code className="mb-4" code={`setRulesMoney(rules: MoneyOptions)`} />
        <div>
          <Highlight code={setRulesMoneyCode} />
        </div>
      </section>
    </>
  );
}
