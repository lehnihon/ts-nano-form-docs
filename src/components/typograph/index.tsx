import { cn } from "@/lib/utils";
import React from "react";

export const TitleText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h2 className={cn("text-xl font-bold mb-4", className)}>{children}</h2>;

export const SubTitleText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h3 className={cn("font-semibold mb-2", className)}>{children}</h3>;

export const Text = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <p className={cn("text-muted-foreground", className)}>{children}</p>;
