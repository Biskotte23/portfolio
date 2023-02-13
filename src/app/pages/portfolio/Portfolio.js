import Banner from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

export default function Portfolio({ handleAnchorLinkClick, refs }) {
  return (
    <div className="page__content portfolio">
      <Banner handleAnchorLinkClick={handleAnchorLinkClick} />
      <About ref={refs.about} handleAnchorLinkClick={handleAnchorLinkClick} />
      <Skills ref={refs.skills} />
    </div>
  );
}
