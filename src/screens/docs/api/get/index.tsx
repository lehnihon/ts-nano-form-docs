import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { getCode } from "./codes";

export default function GetStoreValue() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Get</TitleText>
        <Text className="mb-4">Returns the value of a store</Text>
        <Code className="mb-4" code={`get: () => any;`} />
        <div>
          <Highlight code={getCode} />
        </div>
      </section>
    </>
  );
}
