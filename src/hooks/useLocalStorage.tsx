"use client";
import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(key);
      
      if (storedValue !== null) setState(JSON.parse(storedValue));
    } catch (error) {
      console.error("Failed to read from localStorage", error);
    }
  }, [key]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error("Failed to write to localStorage", error);
    }
  }, [key, state]);

  return [state, setState] as const;
}
