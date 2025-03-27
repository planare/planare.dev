"use client";

import * as React from "react";
import { cn } from "@/utils/cn";
import styles from "./Input.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <div 
          className={cn(
            styles.container,
            error && styles.error,
            className
          )}
        >
          {icon && <div className={styles.icon}>{icon}</div>}
          <input
            className={cn(
              styles.input,
              icon && styles.hasIcon
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input }; 