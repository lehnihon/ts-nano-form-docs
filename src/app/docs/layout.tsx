import NavMenu from "@/components/NavMenu";
import React from "react";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex-1 py-12 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px_1fr]">
        <nav className="sticky top-16 hidden md:block">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Getting Started</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavMenu href="/docs/introduction">Introduction</NavMenu>
              </li>
              <li>
                <NavMenu href="/docs/key">Key Concepts</NavMenu>
              </li>
              <li>
                <NavMenu href="/docs/key">Code Samples</NavMenu>
              </li>
              <li>
                <NavMenu href="/docs/key">Advanced</NavMenu>
              </li>
            </ul>
          </div>
        </nav>
        <div className="space-y-12">{children}</div>
      </div>
    </div>
  );
}
