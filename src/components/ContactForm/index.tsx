"use client";

import { JSX } from "react";

import styles from "./ContactForm.module.scss";

import { Terminal } from "@/ui/Terminal";

interface Question {
  id: string;
  optional?: boolean;
  placeholder: string;
  text: string;
  type?: "email" | "multiline" | "text" | "tel";
  validation?: (value: string) => string | null;
}

const questions: Question[] = [
  {
    id: "name",
    text: "What's your name?",
    placeholder: "John Doe",
    validation: (value: string): string | null => value.length >= 2 ? null : "Name is too short"
  },
  {
    id: "company",
    text: "Company name?",
    placeholder: "Acme Inc",
    optional: true
  },
  {
    id: "email",
    text: "What's your email?",
    type: "email",
    placeholder: "john@acme.com",
    validation: (value: string): string | null => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      return emailRegex.test(value) ? null : "Please enter a valid email";
    }
  },
  {
    id: "project",
    text: "Tell me about your project:",
    type: "multiline",
    placeholder: "I need a web app that...",
    validation: (value: string): string | null => value.length >= 10 ? null : "Please provide more details"
  }
];

export function ContactForm(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Terminal 
        questions={questions} 
        onComplete={(answers) => {
          // In a real app, you'd send this to your API
          // eslint-disable-next-line no-console
          console.log("Form submitted:", answers);
        }}
      />
    </div>
  );
} 