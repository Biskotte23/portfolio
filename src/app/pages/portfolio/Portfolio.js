import Banner from "./components/Banner";
import { About } from "./components/About";

export default function Portfolio({ handleAnchorLinkClick, refs }) {
  return (
    <div className="page__content portfolio">
      <Banner handleAnchorLinkClick={handleAnchorLinkClick} />
      <About ref={refs.about} handleAnchorLinkClick={handleAnchorLinkClick} />
    </div>
  );
}
