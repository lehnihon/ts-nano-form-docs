import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import { formCode } from "./codes";

export default function Form() {
  return (
    <>
      <section id="quick-start">
        <TitleText>Form</TitleText>
        <Text className="mb-4">
          To get started, follow these simple steps to install and integrate the
          library into your project.
        </Text>
        <div>
          <Highlight code={formCode} />
        </div>
      </section>
    </>
  );
}
