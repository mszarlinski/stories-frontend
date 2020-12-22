import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="font-sans leading-tight px-36">
      <BrowserRouter>
          <Navbar />
          <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
