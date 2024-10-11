import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getRulesCode } from "./codes";

export default function GetRules() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetRules</TitleText>
        <Text className="mb-4">Get current rules</Text>
        <Code className="mb-4" code={`getRules()`} />
        <div>
          <Highlight code={getRulesCode} />
        </div>
      </section>
    </>
  );
}
