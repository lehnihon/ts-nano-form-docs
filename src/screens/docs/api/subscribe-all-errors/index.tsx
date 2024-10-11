import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { subscribeAllErrorsCode } from "./codes";

export default function SubscribeAllErrors() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SubscribeAllErrors</TitleText>
        <Text className="mb-4">Watch changes in all store errors</Text>
        <Code
          className="mb-4"
          code={`subscribeAllErrors(listener: (value: string, prevValue: string) => void): () => void`}
        />
        <div>
          <Highlight code={subscribeAllErrorsCode} />
        </div>
      </section>
    </>
  );
}
