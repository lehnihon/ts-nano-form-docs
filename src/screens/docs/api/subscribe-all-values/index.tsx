import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { subscribeAllValuesCode } from "./codes";

export default function SubscribeAllValues() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SubscribeAllValues</TitleText>
        <Text className="mb-4">Watch changes in all store values</Text>
        <Code
          className="mb-4"
          code={`subscribeAllValues(listener: (value: string, prevValue: string) => void): () => void`}
        />
        <div>
          <Highlight code={subscribeAllValuesCode} />
        </div>
      </section>
    </>
  );
}
