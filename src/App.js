import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>E-Comm</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
