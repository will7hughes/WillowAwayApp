import logo from './logo.svg';
import './App.css';

import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="text-white bg-black body-font">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </main>
  );
}

export default App;
