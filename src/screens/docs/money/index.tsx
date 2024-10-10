import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import { moneyCode } from "./codes";

export default function Money() {
  return (
    <>
      <section id="money" className="max-w-4xl">
        <TitleText>Money</TitleText>
        <Text className="mb-4">
          To manipulate money, it is necessary to use specific methods to ensure
          data masking is correct.
        </Text>
        <div>
          <Highlight code={moneyCode} />
        </div>
      </section>
    </>
  );
}
