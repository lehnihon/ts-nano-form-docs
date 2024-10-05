import React from "react";

export default function Introduction() {
  return (
    <>
      <section id="introduction">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p className="mt-4 text-muted-foreground">
          Lightweight, dependency-free library designed to streamline input text
          validation and masking .
        </p>
        <p className="mt-2 text-muted-foreground">
          Built entirely in TypeScript, ensures type safety and a smooth
          developer experience, while offering powerful features to enhance user
          input handling.
        </p>
        <p className="mt-2 text-muted-foreground">
          The library is flexible and straightforward, making it perfect for
          developers looking to enhance form functionality without adding
          unnecessary complexity or external dependencies.
        </p>
      </section>
      <section id="key-concepts">
        <h2 className="text-3xl font-bold">Key Concepts</h2>
        <div className="mt-4 grid gap-8">
          <div>
            <h3 className="text-xl font-semibold">Real-time Input Masking</h3>
            <p className="mt-2 text-muted-foreground">
              Easily define and apply masks to input fields for a wide range of
              use cases, such as phone numbers, dates, and custom formats. The
              mask dynamically formats user input as they type, enhancing the
              user experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Customizable Validation Rules
            </h3>
            <p className="mt-2 text-muted-foreground">
              Validate user input with simple yet powerful custom rules. Define
              your own validation logic, from simple required fields to complex
              input patterns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">TypeScript-First Design</h3>
            <p className="mt-2 text-muted-foreground">
              Built with TypeScript, Ts Nano Form offers full type safety,
              autocompletion, and error checking at compile time, making
              development faster and more reliable.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Dependency-Free</h3>
            <p className="mt-2 text-muted-foreground">
              Completely free of external dependencies, ensuring a lightweight
              footprint and compatibility with any project, without the risk of
              conflicting libraries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Simple API</h3>
            <p className="mt-2 text-muted-foreground">
              A clean and intuitive API allows developers to easily configure
              input masks and validation logic with minimal setup. Prioritizes
              simplicity without sacrificing flexibility.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Built-in Patterns</h3>
            <p className="mt-2 text-muted-foreground">
              Includes built-in patterns for common use cases like credit cards,
              phone numbers, postal codes, and more. Simply plug in the desired
              mask pattern and you&apos;re good to go.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Customizable Mask Formats</h3>
            <p className="mt-2 text-muted-foreground">
              Create custom mask formats for any type of input, from social
              security numbers to custom identification strings, with full
              control over the input behavior.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Lightweight and Fast</h3>
            <p className="mt-2 text-muted-foreground">
              Optimized for performance, ensuring that even with complex
              validation rules and masks, your forms remain responsive and
              efficient.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
