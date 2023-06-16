import { forwardRef } from "react";
import profileImage from "../../../../../assets/images/profile.jpg";
import DoubleBorderImage from "../../../../components/DoubleBorderImage";

/**
 * Presentation of myself.
 *
 * @param {function} handleAnchorLinkClick Function for managing clicks on anchor links.
 * @returns {JSX.Element} Presentation of myself.
 */
function Presentation({ handleAnchorLinkClick }) {
  return (
    <div className="about-content__presentation">
      <p>
        Bonjour, je m'appelle Jules et je suis étudiant en 4e année d'école
        d'ingénieur en informatique à{" "}
        <a
          className="link"
          href="https://polytech.univ-tours.fr/"
          target="_blank"
          rel="noreferrer"
        >
          Polytech Tours
        </a>
        . Je suis passionné par la conception et la réalisation de projets
        informatiques, et je m'efforce de fournir un travail de qualité pour
        chacun d'entre eux.
      </p>
      <p>
        Durant mes études, j'ai eu l'occasion de travailler sur divers{" "}
        <a
          className="link"
          href="#projets"
          onClick={() => handleAnchorLinkClick("projects")}
        >
          projets
        </a>
        , individuellement ou en équipe, en utilisant une large gamme de
        langages et technologies. Cette expérience m'a permis de développer une
        grande autonomie, une discipline rigoureuse, et une passion pour
        l'excellence.
      </p>
      <p>
        Ma spécialisation se concentre sur le développement de solutions web et
        mobiles. Je vous invite à découvrir certains des projets sur lesquels
        j'ai travaillé à travers mon portfolio.
      </p>
    </div>
  );
}

/**
 * Picture of myself.
 *
 * @returns {JSX.Element} Picture of myself.
 */
function Picture() {
  return (
    <div className="about-content__picture">
      <DoubleBorderImage src={profileImage} alt="Someone" />
    </div>
  );
}

/**
 * About section.
 *
 * @param {function} handleAnchorLinkClick Function for managing clicks on anchor links.
 * @param {object} ref Element reference.
 * @return {JSX.Element} About section.
 */
export const About = forwardRef(({ handleAnchorLinkClick }, ref) => {
  return (
    <section id="about-section" className="section about" ref={ref}>
      <div className="section__container">
        <h2>Qui suis-je ?</h2>
        <div className="about-content">
          <Presentation handleAnchorLinkClick={handleAnchorLinkClick} />
          <Picture />
        </div>
      </div>
    </section>
  );
});
