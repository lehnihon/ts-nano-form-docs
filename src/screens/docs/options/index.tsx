import Highlight from "@/components/Highlight";
import React from "react";
import { SubTitleText, Text, TitleText } from "@/components/typograph";
import {
  optionBeforeCode,
  optionCode,
  optionDefaultCode,
  optionTypeCode,
} from "./codes";

export default function Options() {
  return (
    <>
      <section id="option" className="max-w-4xl">
        <TitleText>Options</TitleText>
        <Text className="mb-4">
          To change the default mask and money settings you need to use the
          custom settings
        </Text>
        <div>
          <Highlight code={optionCode} />
        </div>
      </section>
      <section id="default" className="max-w-4xl">
        <SubTitleText>Default options</SubTitleText>
        <div>
          <Highlight code={optionDefaultCode} />
        </div>
      </section>
      <section id="types" className="max-w-4xl">
        <SubTitleText>Types</SubTitleText>
        <div>
          <Highlight code={optionTypeCode} />
        </div>
      </section>
      <section id="before" className="max-w-4xl">
        <SubTitleText>Before Mask, After Mask</SubTitleText>
        <div>
          <Highlight code={optionBeforeCode} />
        </div>
      </section>
    </>
  );
}
