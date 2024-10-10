"use client";

import { cn } from "@/lib/utils";

export default function Code({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#656565] text-white rounded-lg p-2 px-6 inline-block",
        className
      )}
    >
      {code}
    </div>
  );
}
