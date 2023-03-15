import Banner from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function Portfolio({ handleAnchorLinkClick, refs }) {
  return (
    <div className="page__content portfolio">
      <Banner handleAnchorLinkClick={handleAnchorLinkClick} />
      <About ref={refs.about} handleAnchorLinkClick={handleAnchorLinkClick} />
      <Skills ref={refs.skills} />
      <Projects ref={refs.projects} />
      <Contact ref={refs.contact} />
    </div>
  );
}
