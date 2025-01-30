import Highlight from "@/components/Highlight";
import React from "react";
import { Text, TitleText } from "@/components/typograph";
import Code from "@/components/Code";
import { createFormCode } from "./codes";

export default function CreateForm() {
  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>CreateForm</TitleText>
        <Text className="mb-4">Create forms</Text>
        <Code
          className="mb-4"
          code={`createForm<T>(params: {
  name: string;
  initialValues?: T;
  resolver?: (values: T) => Record<string, any> | undefined;
}) => CreateFormType<T>`}
        />
        <div>
          <Highlight code={createFormCode} />
        </div>
      </section>
    </>
  );
}
