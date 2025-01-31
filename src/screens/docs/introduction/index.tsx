"use client";

import { Text, TitleText } from "@/components/typograph";
import React from "react";

export default function Introduction() {
  return (
    <>
      <section id="introduction" className="max-w-4xl">
        <TitleText>Introduction</TitleText>
        <Text className="mb-2">
          NanoForm is a powerful and lightweight TypeScript library designed to
          handle input masking and validation across all JavaScript frameworks.
        </Text>
        <Text className="mb-2">
          Whether you are using React, Vue, Angular, Svelte, or Vanilla JS,
          NanoForm provides a seamless and efficient way to ensure correct data
          entry and validation in your forms.
        </Text>
      </section>
    </>
  );
}
