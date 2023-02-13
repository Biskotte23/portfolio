import { forwardRef } from "react";
import { languages, frontend, backend, tools } from "../../../../data/skills";

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

export const Skills = forwardRef(({}, ref) => {
  const skillCategories = {
    languages: {
      title: "Langages",
      skills: languages,
    },
    frontend: {
      title: "Frontend",
      skills: frontend,
    },
    backend: {
      title: "Backend",
      skills: backend,
    },
    tools: {
      title: "Outils",
      skills: tools,
    },
  };

  return (
    <section className="section skills" ref={ref}>
      <div className="section__container">
        <h2>Mes skills</h2>

        <div className="skills-content">
          {Object.keys(skillCategories).map((categoryName) => {
            const category = skillCategories[categoryName];

            return (
              <div className="skills-block" key={categoryName}>
                <h3 className="skills-block__title">{category.title}</h3>
                <div className="skills-block__raw">
                  {category.skills
                    .filter((skill) => skill.show === true)
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((skill) => (
                      <SkillCard skill={skill} key={skill.title} />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
