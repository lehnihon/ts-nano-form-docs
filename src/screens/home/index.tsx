"use client";

import Link from "next/link";
import React from "react";
import {
  AccessibilityIcon,
  BrushIcon,
  FilesIcon,
  PowerIcon,
  VenetianMaskIcon,
} from "./icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Discover Our Unique Features
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Unlock the power of dynamic input masking with our feature-rich
                React library. Transform your forms and enhance the user
                experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground/20 bg-primary/10 px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Demo
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
              <h3 className="text-xl font-bold">Flexible Masking</h3>
              <p className="text-muted-foreground">
                Support for a wide range of mask types, including phone numbers,
                dates, credit cards, and more.
              </p>
            </div>
            <div className="space-y-2">
              <BrushIcon />
              <h3 className="text-xl font-bold">Customizable Styles</h3>
              <p className="text-muted-foreground">
                Easily customize the appearance of your mask inputs to match
                your brand and design.
              </p>
            </div>
            <div className="space-y-2">
              <AccessibilityIcon />
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-muted-foreground">
                Ensure your forms are accessible to all users with built-in
                support for screen readers and keyboard navigation.
              </p>
            </div>
            <div className="space-y-2">
              <PowerIcon />
              <h3 className="text-xl font-bold">High Performance</h3>
              <p className="text-muted-foreground">
                Optimized for speed and efficiency, with minimal impact on your
                application&apos;s performance.
              </p>
            </div>
            <div className="space-y-2">
              <AccessibilityIcon />
              <h3 className="text-xl font-bold">Responsive Design</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate with your responsive web design, ensuring a
                consistent user experience across all devices.
              </p>
            </div>
            <div className="space-y-2">
              <FilesIcon />
              <h3 className="text-xl font-bold">Comprehensive Documentation</h3>
              <p className="text-muted-foreground">
                Detailed documentation and examples to help you get up and
                running quickly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="installation" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get Started with Mask Input
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these simple steps to add the mask input library to your
              React project.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-md border border-input bg-background p-4">
              <h3 className="text-lg font-bold">Install the Library</h3>
              <pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-sm">
                <code>npm install @acme/mask-input</code>
              </pre>
            </div>
            <div className="rounded-md border border-input bg-background p-4">
              <h3 className="text-lg font-bold">Import and Use</h3>
              <pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-sm">
                <code>{`import { MaskInput } from '@acme/mask-input'

<MaskInput
  mask="(999) 999-9999"
  placeholder="(123) 456-7890"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
