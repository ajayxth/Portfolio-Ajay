import About from "./about/page";
import Header from "./components/Header";
import Skills from "./skills/page";
import Project from "./project/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
