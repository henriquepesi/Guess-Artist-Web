import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import ScoreProvider from "./context/Score";

import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <ScoreProvider>
      <div className="App">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    </ScoreProvider>
  );
}

export default App;
