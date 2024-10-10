import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import { storeCode } from "./codes";

export default function Store() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Store</TitleText>
        <Text className="mb-4">
          Store is a core functionality in Ts Nano Form designed to store a
          value that can be validated and observed in real time. This feature
          helps to manage form values and errors that needs to be updated and
          accessed globally.
        </Text>
        <div>
          <Highlight code={storeCode} />
        </div>
      </section>
    </>
  );
}
