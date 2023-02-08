import { forwardRef } from "react";
import { languages, frontend, backend, tools } from "../../../../data/skills";

function Presentation() {
  return (
    <div className="about-content__presentation">
      <p>
        Bonjour, je m’appelle Jules, j’ai 21 ans, et je suis actuellement en 4e
        année d’école d’ingénieur en informatique à{" "}
        <a
          className="link"
          href="https://polytech.univ-tours.fr/"
          target="_blank"
          rel="noreferrer"
        >
          Polytech Tours
        </a>
        . Passionné de développement web et mobile, je travaille essentiellement
        avec <strong className="bold">React</strong> pour du développement web
        front-end et <strong className="bold">Flutter</strong> pour du
        développement mobile.
      </p>
      <p>
        Au cours de mes études, j'ai eu l'opportunité de travailler sur de
        nombreux{" "}
        <a className="link" href="/">
          projets
        </a>
        , individuels ou collectifs, avec des langages et technologies très
        variés.
      </p>
      <p>
        Toute cette expérience m'a permis d'acquérir une bonne autonomie, une
        certaine discipline, ainsi que l'amour du travail bien fait.
      </p>
    </div>
  );
}

function Picture() {
  return (
    <div className="about-content__picture">
      <div className="image-double-border">
        <img
          src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="Someone"
        />
        <div className="border one">
          <div className="border__child"></div>
        </div>
        <div className="border two">
          <div className="border__child"></div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const skillCategories = {
    languages: {
      title: "Langages",
      skills: languages,
    },
    frontend: {
      title: "Front-end",
      skills: frontend,
    },
    backend: {
      title: "Back-end",
      skills: backend,
    },
    tools: {
      title: "Outils",
      skills: tools,
    },
  };

  return (
    <div className="skills-container">
      {Object.keys(skillCategories).map((categoryName) => {
        const category = skillCategories[categoryName];

        return (
          <div className="skills-column" key={categoryName}>
            <h4 className="skills-column__title">{category.title}</h4>
            <div className="skills-column__content">
              {category.skills.map((skill) => (
                <SkillCard skill={skill} key={skill.title} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img
        src={skill.icon}
        alt={`Logo ${skill.title}`}
        className="skill-card__logo"
      />
      <p className="skill-card__title">{skill.title}</p>
    </div>
  );
}

export const About = forwardRef(({ handleAnchorLinkClick }, ref) => {
  return (
    <section className="about" ref={ref}>
      <div className="about__container">
        <h2>Qui suis-je ?</h2>
        <div className="about-content">
          <Presentation />
          <Picture />
        </div>
        <div className="skills">
          <h3>
            Mes compétences <i className="fa-solid fa-angle-down"></i>
          </h3>
          <Skills />
        </div>
      </div>
    </section>
  );
});
