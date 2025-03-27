"use client";

import { Switch as SwitchPrimitive } from "radix-ui";
import { JSX } from "react";

import styles from "./Switch.module.scss";

import { cn } from "@/utils/cn";

interface SwitchProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export function Switch({ 
  checked, 
  onCheckedChange, 
  disabled, 
  className 
}: SwitchProps): JSX.Element {
  return (
    <SwitchPrimitive.Root
      checked={checked}
      className={cn(
        styles.root,
        disabled && styles.disabled,
        className
      )}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
    >
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  );
} 