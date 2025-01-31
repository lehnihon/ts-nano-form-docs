import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { setCode } from "./codes";

export default function SetStoreValue() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Set</TitleText>
        <Text className="mb-4">Set the value of the store</Text>
        <Code className="mb-4" code={`set: (newValue: any) => void;`} />
        <div>
          <Highlight code={setCode} />
        </div>
      </section>
    </>
  );
}
