import React, { createContext, useState, useContext } from "react";

const ScoreContext = createContext();

export default function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider
      value={{
        score,
        setScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const context = useContext(ScoreContext);
  const { score, setScore } = context;
  return { score, setScore };
}
