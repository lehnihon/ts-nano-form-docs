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
                <li>
                  <NavMenu href="/docs/api/set-rules-money">
                    SetRulesMoney
                  </NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-rules">GetRules</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-is-valid">GetIsValid</NavMenu>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">API Store</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavMenu href="/docs/api/get-value">GetValue</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-masked">GetMasked</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-unmasked">GetUnmasked</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-money-masked">
                    GetMoneyMasked
                  </NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-money-unmasked">
                    GetMoneyUnmasked
                  </NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-error">GetError</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-values">GetValues</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-errors">GetErrors</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/set-value">SetValue</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/set-masked">SetMasked</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/set-money-masked">
                    SetMoneyMasked
                  </NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/set-error">SetError</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/subscribe-value">
                    SubscribeValue
                  </NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/subscribe-error">
                    SubscribeError
                  </NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/subscribe-all-values">
                    SubscribeAllValues
                  </NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/subscribe-all-errors">
                    SubscribeAllErrors
                  </NavMenu>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">API Mask</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <NavMenu href="/docs/api/mask">Mask</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/unmask">Unmask</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/mask-money">MaskMoney</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/unmask-money">UnmaskMoney</NavMenu>
                </li>
                <li>
                  <NavMenu href="/docs/api/get-placeholder">
                    GetPlaceholder
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
