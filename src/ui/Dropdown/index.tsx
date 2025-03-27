"use client";

import { DropdownMenu } from "radix-ui";
import { JSX, ReactNode } from "react";

import styles from "./Dropdown.module.scss";

interface DropdownItem {
  description?: string;
  href: string;
  icon?: React.ReactNode;
  title: string;
}

interface DropdownProps {
  children: ReactNode;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
}

export function Dropdown({ children, items, onSelect }: DropdownProps): JSX.Element {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content} sideOffset={8}>
          {items.map((item, i) => (
              <DropdownMenu.Item key={i} className={styles.item} onClick={() => onSelect?.(item)}>
              <a className={styles.link} href={item.href}>
                {item.icon && (
                  <span className={styles.icon}>{item.icon}</span>
                )}
                <div>
                  <div className={styles.title}>{item.title}</div>
                  {item.description && (
                    <div className={styles.description}>{item.description}</div>
                  )}
                </div>
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
} 