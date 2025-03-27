"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, JSX } from "react";

import styles from "./Terminal.module.scss";

import { Button } from "@/ui/Button";

type Question = {
  id: string;
  placeholder?: string;
  text: string;
  type?: 'text' | 'email' | 'tel' | 'multiline';
}

type TerminalProps = {
  onComplete?: (answers: Record<string, string>) => void;
  questions: Question[];
}

export function Terminal({ questions, onComplete }: TerminalProps): JSX.Element {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentQuestion, isMounted]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    if (currentInput.trim()) {
      const newAnswers = { ...answers, [questions[currentQuestion].id]: currentInput };

      setAnswers(newAnswers);
      setHistory([...history, `> ${questions[currentQuestion].text}`, currentInput]);
      setCurrentInput("");

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(curr => curr + 1);
      } else {
        setIsComplete(true);
      }
    }
  };

  if (!isMounted) return <> </>;

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.title}>client-info.sh</div>
      </div>
      
      <div className={styles.content}>
        <AnimatePresence mode="popLayout">
          {history.map((line, i) => (
            <motion.div
              key={i}
              animate={{ opacity: 1, y: 0 }}
              className={styles.historyLine}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: 10 }}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>

        {!isComplete && currentQuestion < questions.length && (
          <form onSubmit={handleSubmit}>
            <motion.div 
              animate={{ opacity: 1 }}
              className={styles.prompt}
              initial={{ opacity: 0 }}
            >
               {questions[currentQuestion].text}
            </motion.div>
            <input
              ref={inputRef}
              autoComplete="off"
              className={styles.input}
              placeholder={questions[currentQuestion].placeholder}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
            />
          </form>
        )}

        {isComplete && (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.completion}
            initial={{ opacity: 0 }}
          >
            <Button 
              variant="default"
              onClick={() => onComplete?.(answers)}
            >
              Submit
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
} 