import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { createEmitCode } from "./codes";

export default function EmitChanges() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Emit</TitleText>
        <Text className="mb-4">Send a notification to the store</Text>
        <Code
          className="mb-4"
          code={`emit: (value: any, prevValue: any) => void;`}
        />
        <div>
          <Highlight code={createEmitCode} />
        </div>
      </section>
    </>
  );
}
