"use client";

import { TitleText } from "@/components/typograph";
import React from "react";
import InputText from "./InputText";
import TsFormUser from "./TsFormUser";

export default function BasicDemo() {
  const handleSubmit = () => {
    TsFormUser.submit((data) => console.log(data));
  };

  return (
    <>
      <section id="stores" className="max-w-4xl">
        <TitleText>Basic Demo</TitleText>
        <div className="space-y-4">
          <InputText field="name" />
          <InputText field="document" mask={["000-000", "00-000-000"]} />
        </div>

        <button
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground/20 bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={handleSubmit}
        >
          Send
        </button>
      </section>
    </>
  );
}
