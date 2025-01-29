"use client";

import Highlight from "@/components/Highlight";
import { Text, TitleText } from "@/components/typograph";
import React from "react";
import {
  angularFormHtmlCode,
  angularFormTsCode,
  angularInputHtmlCode,
  angularInputTsCode,
} from "./codes";

export default function AngularExample() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Angular</TitleText>
        <Text className="mb-4">Html component code</Text>
        <div>
          <Highlight code={angularInputHtmlCode} />
        </div>
        <Text className="mt-4 mb-4">Typescript component code</Text>
        <div>
          <Highlight code={angularInputTsCode} />
        </div>

        <Text className="mt-4 mb-4">Html form code</Text>
        <div>
          <Highlight code={angularFormHtmlCode} />
        </div>
        <Text className="mt-4 mb-4">Typescript form code</Text>
        <div>
          <Highlight code={angularFormTsCode} />
        </div>
      </section>
    </>
  );
}
