import Link from "next/link";
import React from "react";
import NavMenu from "./NavMenu";
import { ToogleThemeButton } from "./ToogleThemeButton";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b bg-background">
        <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
          <nav className="flex items-center space-x-4">
            <Link href="/" className="mr-6 flex items-center" prefetch={false}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
              <span className="sr-only">Ts Nano Form</span>
            </Link>
            <NavMenu className="text-sm font-medium" href="/docs">
              Docs
            </NavMenu>
            <NavMenu className="text-sm font-medium" href="/examples">
              Examples
            </NavMenu>
          </nav>
          <div className="ml-auto">
            <ToogleThemeButton />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-muted">
        <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-6">
          <p className="text-xs text-muted-foreground">&copy; TS Nano Form</p>
          <nav className="flex items-center space-x-4"></nav>
        </div>
      </footer>
    </div>
  );
}
