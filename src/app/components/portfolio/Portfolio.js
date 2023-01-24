import Presentation from "./components/presentation/Presentation";
import Divider from "../../../components/divider/Divider";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Presentation />
      <About />
      <Divider />
      <Skills />
    </div>
  );
}
