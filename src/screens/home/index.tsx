"use client";

import Link from "next/link";
import React from "react";
import { FilesIcon, PowerIcon, VenetianMaskIcon } from "./icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-12 md:py-20 lg:py-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 dark:text-black">
                Discover Our Unique Features
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Unlock the power of dynamic form utilities with our feature-rich
                Typescript library. Transform your data and enhance the user
                experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/quick-start"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <VenetianMaskIcon />
              <h3 className="text-xl font-bold">
                Customizable Masking & Validation Rules
              </h3>
              <p className="text-muted-foreground">
                Developers can define custom masks and validation rules tailored
                to specific use cases, such as international phone formats.
              </p>
            </div>
            <div className="space-y-2">
              <PowerIcon />
              <h3 className="text-xl font-bold">
                Lightweight & Performance Optimized
              </h3>
              <p className="text-muted-foreground">
                A well-optimized TypeScript library can be lightweight and
                dependency-free, ensuring fast performance with minimal impact
                on load times.
              </p>
            </div>
            <div className="space-y-2">
              <FilesIcon />
              <h3 className="text-xl font-bold">
                Seamless Integration with Form Libraries
              </h3>
              <p className="text-muted-foreground">
                Easily integrates with popular React/Angular/Vue form management
                libraries like React Hook Form or Formik.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="installation" className="w-full pb-12 md:pb-24 lg:pb-32">
        <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get Started with TS Nano Form
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these simple steps to add the library to your project.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-md border border-input bg-background p-4">
              <h3 className="text-lg font-bold">Install the Library</h3>
              <pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-sm">
                <code>npm install ts-nano-form</code>
              </pre>
            </div>
            <div className="rounded-md border border-input bg-background p-4">
              <h3 className="text-lg font-bold">Import and Use</h3>
              <pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-sm">
                <code>{`import NanoForm from "ts-nano-form";

const TsNanoForm = NanoForm();

const FormUser = TsNanoForm.createForm();

FormUser.field("name").setValue("John Doe");

FormUser.submit((data) => {
  console.log("FETCH", data);
});
`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
