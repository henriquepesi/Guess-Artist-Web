import React, { createContext, useState, useContext } from "react";

const ScoreContext = createContext();

export default function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
        answers,
        setAnswers,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);
  const { score, setScore, answers, setAnswers } = context;
  return { score, setScore, answers, setAnswers };
}
