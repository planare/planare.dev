"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import {Toast} from "radix-ui";
import { JSX, useCallback, useState } from "react";

import styles from "./Toast.module.scss";

import { cn } from "@/utils/cn";

interface ToastOptions {
  description?: string;
  duration?: number;
  title: string;
  variant?: "default" | "success" | "error";
}

export function useToast(): {
  setToasts: React.Dispatch<React.SetStateAction<(ToastOptions & { id: string })[]>>;
  toast: (options: ToastOptions) => void;
  toasts: (ToastOptions & { id: string })[];
} {
  const [toasts, setToasts] = useState<(ToastOptions & { id: string })[]>([]);

  const toast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).slice(2);

    setToasts((prev) => [...prev, { ...options, id }]);
    
    if (options.duration !== Infinity) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, options.duration || 5000);
    }
  }, []);

  return { toast, toasts, setToasts };
}

export function Toaster(): JSX.Element {
  const { toasts, setToasts } = useToast();

  return (
    <Toast.Provider>
      {toasts.map((toast) => (
        <Toast.Root
          key={toast.id}
          className={cn(styles.root, toast.variant && styles[toast.variant])}
          onOpenChange={(open) => {
            if (!open) {
              setToasts((prev: (ToastOptions & { id: string })[]) => 
                prev.filter((t: ToastOptions & { id: string }) => t.id !== toast.id)
              );
            }
          }}
        >
          <div className={styles.content}>
            <Toast.Title className={styles.title}>{toast.title}</Toast.Title>
            {toast.description && (
              <Toast.Description className={styles.description}>
                {toast.description}
              </Toast.Description>
            )}
          </div>
          <Toast.Close className={styles.close}>
            <Cross2Icon />
          </Toast.Close>
        </Toast.Root>
      ))}
      <Toast.Viewport className={styles.viewport} />
    </Toast.Provider>
  );
}