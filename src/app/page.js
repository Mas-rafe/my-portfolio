import About from "./Components/About";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
    </main>
  );
}
