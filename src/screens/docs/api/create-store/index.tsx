import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { createStoreCode } from "./codes";

export default function CreateStore() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>CreateStore</TitleText>
        <Text className="mb-4">
          CreateStore initializes a store, a value that can be observed
        </Text>
        <Text className="mb-4">
          The Nano Form API already creates all the stores necessary for the
          forms, but if it is necessary to create a value outside the form, the
          store can be used
        </Text>
        <Code
          className="mb-4"
          code={`createForm<T>(params: {
  name: string;
  initialValues?: T;
  resolver?: (values: T) => Record<string, any> | undefined;
}) => CreateFormType<T>`}
        />
        <div>
          <Highlight code={createStoreCode} />
        </div>
      </section>
    </>
  );
}
