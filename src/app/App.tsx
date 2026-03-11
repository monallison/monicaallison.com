import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { BeyondResume } from "./components/BeyondResume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <BeyondResume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
