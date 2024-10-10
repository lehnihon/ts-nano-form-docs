import { SubTitleText, Text, TitleText } from "@/components/typograph";
import React from "react";

export default function Introduction() {
  return (
    <>
      <section id="introduction" className="max-w-4xl">
        <TitleText>Introduction</TitleText>
        <Text className="mb-2">
          Lightweight, dependency-free library designed to streamline input text
          validation and masking .
        </Text>
        <Text className="mb-2">
          Built entirely in TypeScript, ensures type safety and a smooth
          developer experience, while offering powerful features to enhance user
          input handling.
        </Text>
        <Text>
          The library is flexible and straightforward, making it perfect for
          developers looking to enhance form functionality without adding
          unnecessary complexity or external dependencies.
        </Text>
      </section>
      <section id="key-concepts" className="max-w-4xl">
        <TitleText>Key Concepts</TitleText>
        <div className="mt-4 grid gap-4">
          <div>
            <SubTitleText>Real-time Input Masking</SubTitleText>
            <Text>
              Easily define and apply masks to input fields for a wide range of
              use cases, such as phone numbers, dates, and custom formats. The
              mask dynamically formats user input as they type, enhancing the
              user experience.
            </Text>
          </div>
          <div>
            <SubTitleText>Customizable Validation Rules</SubTitleText>
            <Text>
              Validate user input with simple yet powerful custom rules. Define
              your own validation logic, from simple required fields to complex
              input patterns.
            </Text>
          </div>
          <div>
            <SubTitleText>TypeScript-First Design</SubTitleText>
            <Text>
              Built with TypeScript, Ts Nano Form offers full type safety,
              autocompletion, and error checking at compile time, making
              development faster and more reliable.
            </Text>
          </div>
          <div>
            <SubTitleText>Dependency-Free</SubTitleText>
            <Text>
              Completely free of external dependencies, ensuring a lightweight
              footprint and compatibility with any project, without the risk of
              conflicting libraries.
            </Text>
          </div>
          <div>
            <SubTitleText>Simple API</SubTitleText>
            <Text>
              A clean and intuitive API allows developers to easily configure
              input masks and validation logic with minimal setup. Prioritizes
              simplicity without sacrificing flexibility.
            </Text>
          </div>
          <div>
            <SubTitleText>Built-in Patterns</SubTitleText>
            <Text>
              Includes built-in patterns for common use cases like credit cards,
              phone numbers, postal codes, and more. Simply plug in the desired
              mask pattern and you&apos;re good to go.
            </Text>
          </div>
          <div>
            <SubTitleText>Customizable Mask Formats</SubTitleText>
            <Text>
              Create custom mask formats for any type of input, from social
              security numbers to custom identification strings, with full
              control over the input behavior.
            </Text>
          </div>
          <div>
            <SubTitleText>Lightweight and Fast</SubTitleText>
            <Text>
              Optimized for performance, ensuring that even with complex
              validation rules and masks, your forms remain responsive and
              efficient.
            </Text>
          </div>
        </div>
      </section>
    </>
  );
}
