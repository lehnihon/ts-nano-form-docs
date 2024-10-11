import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { subscribeErrorCode } from "./codes";

export default function SubscribeError() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>SubscribeError</TitleText>
        <Text className="mb-4">Watch changes in the store error</Text>
        <Code
          className="mb-4"
          code={`subscribeError(listener: (value: string, prevValue: string) => void): () => void`}
        />
        <div>
          <Highlight code={subscribeErrorCode} />
        </div>
      </section>
    </>
  );
}
