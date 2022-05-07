import React from "react";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatDTBN,
} from "./containers";
import { Article, Brand, CTA, Feauture, Navbar } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatDTBN />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
