import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { nanoFormCode } from "./codes";

export default function NanoForm() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>NanoForm</TitleText>
        <Text className="mb-4">Nano Form initialization object</Text>
        <Code
          className="mb-4"
          code={`NanoForm(params: {
  maskOptions?: MaskOptions;
  moneyOptions?: MoneyOptions;
}) => NanoFormType`}
        />
        <div>
          <Highlight code={nanoFormCode} />
        </div>
      </section>
    </>
  );
}
