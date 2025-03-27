"use client";

import { ButtonHTMLAttributes, JSX, ReactNode } from "react";

import styles from "./Button.module.scss";

import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "1" | "2" | "3";
  variant?: "default" | "outline" | "ghost";
}

export function Button({ 
  children, 
  className,
  variant = "default",
  size = "2",
  ...props 
}: ButtonProps): JSX.Element {
  return (
    <button 
      className={cn(styles.button, styles[variant], styles[`size${size}`], className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
} 