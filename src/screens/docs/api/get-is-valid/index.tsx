import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getIsValidCode } from "./codes";

export default function GetIsValid() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetIsValid</TitleText>
        <Text className="mb-4">Returns the state of the form</Text>
        <Code className="mb-4" code={`GetIsValid()`} />
        <div>
          <Highlight code={getIsValidCode} />
        </div>
      </section>
    </>
  );
}
