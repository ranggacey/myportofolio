import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import projectsData from "@/data/projects.json";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects projects={projectsData} />
        <Contact />
      </main>
      <Chatbot />
    </>
  );
}
