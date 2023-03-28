import { forwardRef } from "react";
import profileImage from "../../../../assets/images/profile.jpg";
import DoubleBorderImage from "../../../../components/DoubleBorderImage";

function Presentation({ handleAnchorLinkClick }) {
    return (
        <div className="about-content__presentation">
            <p>
                Salut, moi c'est Jules, j’ai 22 ans, et je suis actuellement en
                4e année d’école d’ingénieur en informatique à{" "}
                <a
                    className="link"
                    href="https://polytech.univ-tours.fr/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Polytech Tours
                </a>
                . Passionné de développement web et mobile, je travaille
                essentiellement avec <strong className="bold">React</strong>{" "}
                pour du développement web front-end et{" "}
                <strong className="bold">Flutter</strong> pour du développement
                mobile.
            </p>
            <p>
                Au cours de mes études, j'ai eu l'opportunité de travailler sur
                de nombreux{" "}
                <a
                    className="link"
                    href="#projets"
                    onClick={() => handleAnchorLinkClick("projects")}
                >
                    projets
                </a>
                , individuels ou collectifs, avec des langages et technologies
                très variés.
            </p>
            <p>
                Toute cette expérience m'a permis d'acquérir une bonne
                autonomie, une certaine discipline, ainsi que l'amour du travail
                bien fait.
            </p>
        </div>
    );
}

<<<<<<< HEAD
export const About = forwardRef(({ handleAnchorLinkClick }, ref) => {
  return (
    <section className="section about" ref={ref}>
      <div className="section__container">
        <h2>Qui suis-je ?</h2>
        <div className="about-content">
          <Presentation />
          <Picture />
        </div>
      </div>
    </section>
  );
=======
function Picture() {
    return (
        <div className="about-content__picture">
            <DoubleBorderImage src={profileImage} alt="Someone" />
        </div>
    );
}

export const About = forwardRef(({ handleAnchorLinkClick }, ref) => {
    return (
        <section className="section about" ref={ref}>
            <div className="section__container">
                <h2>Qui suis-je ?</h2>
                <div className="about-content">
                    <Presentation
                        handleAnchorLinkClick={handleAnchorLinkClick}
                    />
                    <Picture />
                </div>
            </div>
        </section>
    );
>>>>>>> dadbb84 (ci: implementation of the projects section)
});
