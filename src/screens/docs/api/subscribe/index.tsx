import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { subscribeCode } from "./codes";

export default function SubscribeStore() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Subscribe</TitleText>
        <Text className="mb-4">Observe changes in the store</Text>
        <Code
          className="mb-4"
          code={`subscribe: (listener: (value: any, prevValue: any) => void) => () => void;`}
        />
        <div>
          <Highlight code={subscribeCode} />
        </div>
      </section>
    </>
  );
}
