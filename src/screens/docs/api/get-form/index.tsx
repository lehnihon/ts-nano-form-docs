import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getFormCode } from "./codes";

export default function GetForm() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>GetForm</TitleText>
        <Text className="mb-4">Get form by name</Text>
        <Code
          className="mb-4"
          code={`getForm(name: string) => CreateFormType<any>`}
        />
        <div>
          <Highlight code={getFormCode} />
        </div>
      </section>
    </>
  );
}
