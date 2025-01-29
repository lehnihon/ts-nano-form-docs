import NavMenu from "@/components/NavMenu";
import React from "react";

export default function ExamplesLayout({
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
              <h3 className="font-semibold mb-2">Examples</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavMenu href="/examples/vanilla-js">Vanilla JS</NavMenu>
                </li>
                <li>
                  <NavMenu href="/examples/react">React</NavMenu>
                </li>
                <li>
                  <NavMenu href="/examples/vue">Vue</NavMenu>
                </li>
                <li>
                  <NavMenu href="/examples/angular">Angular</NavMenu>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Validators</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavMenu href="/examples/yup">Yup</NavMenu>
                </li>
                <li>
                  <NavMenu href="/examples/zod">Zod</NavMenu>
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
