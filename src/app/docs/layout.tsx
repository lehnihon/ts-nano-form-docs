import NavMenu from "@/components/NavMenu";
import React from "react";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex-1 py-12 md:py-24 px-4">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[250px_1fr]">
        <nav className="sticky top-16 hidden md:block">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Getting Started</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavMenu href="/docs/introduction">Introduction</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/quick-start">Quick Start</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/form">Form</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/store">Store</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/mask">Mask</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/money">Money</NavMenu>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Configuration</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavMenu href="/docs/options">Options</NavMenu>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">API Form</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavMenu href="/docs/api/submit">Submit</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/field">Field</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/set-rules-mask">
                    SetRulesMask
                  </NavMenu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="space-y-8">{children}</div>
      </div>
    </div>
  );
}
