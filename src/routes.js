import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:theme" element={<Quiz />} />
      <Route path="/score" element={<Score />} />
    </Routes>
  );
}
