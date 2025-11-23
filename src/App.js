// Update your App.js to use the loading component
import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Footer from "./Component/Footer";
import Loading from "./Component/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  console.log("Rendering App component");

  if (isLoading) {
    return <Loading />;
  }

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
