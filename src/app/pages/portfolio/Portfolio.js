import { useCallback, useEffect, useRef, useState } from "react";

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
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSectionID, setActiveSectionID] = useState("");

  const getRefs = useCallback(
    () => ({
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    [aboutRef, skillsRef, projectsRef, contactRef]
  );

  const refs = getRefs();

  // Handles click on anchor link.
  function handleAnchorLinkClick(anchor) {
    if (refs[anchor]) {
      refs[anchor].current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    // Manages scrolling by detecting the displayed section.
    const handleScroll = () => {
      let currentSection = "";

      Object.keys(refs).forEach((key) => {
        const section = refs[key].current;
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
          // Modifier par key ?
          currentSection = section.id;
        }
      });

      setActiveSectionID(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [refs]);

  return (
    <div className="page">
      <Header
        handleAnchorLinkClick={handleAnchorLinkClick}
        activeSectionID={activeSectionID}
      />
      <div className="page__content">
        <Content refs={refs} handleAnchorLinkClick={handleAnchorLinkClick} />
      </div>
      <SocialNetworksSideBar />
      <ContactSideBar />
      <Footer />
    </div>
  );
}
