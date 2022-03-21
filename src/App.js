import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages";
import "./App.css";

const App = () => {
  return (
    <main>
      <Router>
        <Homepage />
      </Router>
    </main>
  );
};

export default App;
