"use client";

import { JSX, ReactNode, ElementType } from "react";

import styles from "./Badge.module.scss";

import { cn } from "@/utils/cn";

interface BadgeProps {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  inline?: "1" | "2" | "3" | "4" | "5" | "6";
  variant?: "default" | "alternative" | "primary" | "success" | "error";
}

export function Badge({ 
  asChild,
  children, 
  className,
  inline,
  variant = "default" 
}: BadgeProps): JSX.Element {
  const Component: ElementType = asChild ? "div" : "span";

  return (
    <Component 
      className={cn(
        styles.badge,
        variant && styles[variant],
        inline && styles[`inline-${inline}`],
        className
      )}
    >
      {children}
    </Component>
  );
} 