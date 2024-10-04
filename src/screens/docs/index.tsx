import Link from "next/link";
import React from "react";

export default function Docs() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-12 md:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Effortless Masking with React
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Unlock the power of dynamic input masking with our feature-rich
                React library. Transform your forms and enhance the user
                experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-muted/50">
                <img
                  src="/placeholder.svg"
                  alt="Mask Input Demo"
                  width="600"
                  height="400"
                  className="object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
