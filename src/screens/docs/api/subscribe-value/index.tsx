import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { subscribeValueCode } from "./codes";

export default function SubscribeValue() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SubscribeValue</TitleText>
        <Text className="mb-4">Watch changes in the store value</Text>
        <Code
          className="mb-4"
          code={`subscribeValue(listener: (value: string, prevValue: string) => void): () => void`}
        />
        <div>
          <Highlight code={subscribeValueCode} />
        </div>
      </section>
    </>
  );
}
