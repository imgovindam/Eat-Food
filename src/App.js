import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeadlineCards from "./Components/HeadlineCards";
import Foods from "./Components/Foods";
import Category from "./Components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Category />
    </div>
  );
}

export default App;