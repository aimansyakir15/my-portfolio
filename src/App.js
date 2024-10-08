import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About"; // Ensure this import is correct
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Footer from "./Component/Footer";

function App() {
  console.log("Rendering App component");
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#161513] text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;
