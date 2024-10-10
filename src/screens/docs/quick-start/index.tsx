import Highlight from "@/components/Highlight";
import React from "react";
import { formUserCode, installCode } from "./codes";
import { Text, TitleText } from "@/components/typograph";

export default function QuickStart() {
  return (
    <>
      <section id="quick-start" className="max-w-4xl">
        <TitleText>Quick Start</TitleText>
        <Text className="mb-4">
          To get started, follow these simple steps to install and integrate the
          library into your project.
        </Text>
        <div>
          <Highlight code={installCode} />
        </div>
      </section>
      <section id="examples" className="max-w-4xl">
        <TitleText>Example</TitleText>
        <div className="mt-4 grid gap-8">
          <div>
            <Highlight code={formUserCode} />
          </div>
        </div>
      </section>
    </>
  );
}
