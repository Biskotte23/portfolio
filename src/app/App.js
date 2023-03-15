import { useRef } from "react";
import ContactSideBar from "./components/ContactSideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SocialNetworksSideBar } from "./components/SocialNetworks";
import Portfolio from "./pages/portfolio/Portfolio";

export default function App() {
  const refs = {
    about: useRef(),
    skills: useRef(),
    projects: useRef(),
    contact: useRef(),
  };

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
      <Portfolio refs={refs} handleAnchorLinkClick={handleAnchorLinkClick} />
      <SocialNetworksSideBar />
      <ContactSideBar />
      <Footer />
    </div>
  );
}
