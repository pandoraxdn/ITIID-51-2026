import { useState } from "react";

interface UsePreviousTerms {
    previousTerms:  string[];
    addTerm:        (term: string) => void;
}

export const usePreviousTerms = (): UsePreviousTerms => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const addTerm = (newTerm: string): void => {
    setPreviousTerms( prev => [...prev, newTerm] );
  };

  return { previousTerms, addTerm };
};
