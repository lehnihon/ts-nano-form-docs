"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Highlight({ code }: { code: string }) {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    try {
      setCopy(true);
      navigator.clipboard.writeText(code);
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return (
    <div className="bg-[#1e1e1e] rounded-lg pl-6 pb-6 pr-2 pt-2 w-full max-w-4xl">
      <div className="flex items-center justify-end mb-2">
        <Button
          onClick={handleCopy}
          variant="ghost"
          size="icon"
          className="text-[#d4d4d4] hover:bg-[#2d2d2d] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
        >
          {copy ? <CopiedIcon /> : <CopyIcon />}

          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <pre className="rounded-md overflow-auto mr-4">
        <code className="language-jsx text-[#d4d4d4] whitespace-pre-wrap">
          {code}
        </code>
      </pre>
    </div>
  );
}

function CopyIcon() {
  return (
    <svg
      className="w-5 h-5"
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CopiedIcon() {
  return (
    <svg
      className="w-5 h-5"
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
