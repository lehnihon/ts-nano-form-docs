"use client";

import Highlight from "@/components/Highlight";
import { Text, TitleText } from "@/components/typograph";
import React from "react";
import {
  reactFormCode,
  reactFormContext,
  reactFormProvider,
  reactInputCode,
} from "./codes";

export default function ReactExample() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>React</TitleText>
        <Text className="mb-4">
          A provider can be created to share the current form
        </Text>
        <div>
          <Highlight code={reactFormProvider} />
        </div>
        <Text className="mt-4 mb-4">
          The context will be used to query the form used
        </Text>
        <div>
          <Highlight code={reactFormContext} />
        </div>
        <Text className="mt-4 mb-4">
          Create a component and use the useSyncExternalStore hook to watch
          value and error changes.
        </Text>
        <div>
          <Highlight code={reactInputCode} />
        </div>
        <Text className="mt-4 mb-4">Submit fields.</Text>
        <div>
          <Highlight code={reactFormCode} />
        </div>
      </section>
    </>
  );
}
