import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { Navbar } from "./components/navbar/Navbar";
import { ProvideAuth } from "./components/auth/context";

function App() {
  return (
    <div className="font-sans leading-tight px-36">
      <ProvideAuth>
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </ProvideAuth>
    </div>
  );
}

export default App;
