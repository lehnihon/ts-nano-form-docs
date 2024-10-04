"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavMenuProps = {
  href: string;
  children: ReactNode;
  className: string;
};

export default function NavMenu({ href, className, children }: NavMenuProps) {
  const paths = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        `hover:underline ${paths.includes(href) ? "" : "opacity-60"}`,
        className
      )}
    >
      {children}
    </Link>
  );
}
