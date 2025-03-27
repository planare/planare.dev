"use client";

import { Cross1Icon } from "@radix-ui/react-icons";
import { Dialog } from "radix-ui";
import { JSX, ReactNode, useEffect } from "react";

import styles from "./Modal.module.scss";

import { cn } from "@/utils/cn";

interface ModalProps {
  children: ReactNode;
  className?: string;
  onClose: () => void;
  open: boolean;
  title: string;
}

export function Modal({ 
  children, 
  title, 
  open, 
  onClose,
  className 
}: ModalProps): JSX.Element {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return (): void => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={cn(styles.content, className)}>
          <Dialog.Title className={styles.title}>
            {title}
          </Dialog.Title>
          <Dialog.Close className={styles.close}>
            <Cross1Icon />
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
} 