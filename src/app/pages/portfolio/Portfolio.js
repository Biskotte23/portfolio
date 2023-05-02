import { useRef } from "react";

import Banner from "./components/sections/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SocialNetworksSideBar } from "./components/SocialNetworks";
import ContactSideBar from "./components/ContactSideBar";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

/**
 * Home page content.
 *
 * @param {function} handleAnchorLinkClick Function for managing clicks on anchor links.
 * @param {object} refs References to content elements.
 * @returns {JSX.Element} Home page content.
 */
function Content({ handleAnchorLinkClick, refs }) {
  return (
    <div className="portfolio">
      <Banner handleAnchorLinkClick={handleAnchorLinkClick} />
      <About ref={refs.about} handleAnchorLinkClick={handleAnchorLinkClick} />
      <Skills ref={refs.skills} />
      <Projects ref={refs.projects} />
      <Contact ref={refs.contact} />
    </div>
  );
}

/**
 * Home page of the portfolio.
 *
 * @returns {JSX.Element} Home page of the portfolio.
 */
export default function Portfolio() {
  const refs = {
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  // Handle click on anchor link.
  function handleAnchorLinkClick(anchor) {
    if (refs[anchor]) {
      refs[anchor].current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="page">
      <Header handleAnchorLinkClick={handleAnchorLinkClick} />
      <div className="page__content">
        <Content refs={refs} handleAnchorLinkClick={handleAnchorLinkClick} />
      </div>
      <SocialNetworksSideBar />
      <ContactSideBar />
      <Footer />
    </div>
  );
}
