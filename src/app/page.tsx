import Navbar from "@/components/navbar";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    < >
      <Navbar/>
      <div className="m-auto container ">
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
    </>
  );
}
