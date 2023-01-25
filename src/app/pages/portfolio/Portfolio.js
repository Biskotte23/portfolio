import Presentation from "./components/Presentation";
import Divider from "../../../components/Divider";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Presentation />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Skills />
    </div>
  );
}
