/* eslint-disable @next/next/no-img-element */
import { JSX, ReactNode } from "react";

import styles from "./Card.module.scss";

import { cn } from "@/utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export function Card({ children, className, href }: CardProps): JSX.Element {
  const Component = href ? 'a' : 'div';
  
  return (
    <Component 
      className={cn(styles.card, className)}
      href={href}
    >
      {children}
    </Component>
  );
}

Card.Image = function CardImage({ src, alt, className }: { alt: string; className?: string, src: string; }): JSX.Element {
  return (
    <div className={cn(styles.imageWrapper, className)}>
      <img alt={alt} src={src} />
    </div>
  );
};

Card.Content = function CardContent({ children, className }: { children: ReactNode; className?: string }): JSX.Element {
  return (
    <div className={cn(styles.content, className)}>
      {children}
    </div>
  );
}; 