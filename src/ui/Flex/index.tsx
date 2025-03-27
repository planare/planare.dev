import { JSX } from "react";

import styles from "./Flex.module.scss";

import { cn } from "@/utils/cn";

interface FlexProps {
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  as?: "div" | "section" | "article" | "header" | "footer" | "main" | "nav" | "aside";
  bottom?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  justify?: "start" | "center" | "end" | "between" | "around";
  top?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
  width?: "full-width" | "container" | "auto";
}

export function Flex({
  align,
  children,
  className,
  direction,
  gap,
  justify,
  top,
  bottom,
  width = "auto",
  as = "div",
}: FlexProps): JSX.Element {
  const Component = as;

  return (
    <Component
      className={cn(
        styles.flex,
        direction && styles[`direction-${direction}`],
        align && styles[`align-${align}`],
        justify && styles[`justify-${justify}`],
        gap && styles[`gap-${gap}`],
        top && styles[`top-${top}`],
        bottom && styles[`bottom-${bottom}`],
        width && styles[`width-${width}`],
        className
      )}
    >
      {children}
    </Component>
  );
} 