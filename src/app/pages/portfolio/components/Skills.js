import { forwardRef } from "react";

export const Skills = forwardRef((posts, ref) => {
  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: "frontend.svg",
      skills: [
        "HTML",
        "CSS & Sass",
        "Javascript & Typescript",
        "React",
        "Dart & Flutter",
      ],
    },
    backend: {
      title: "Backend",
      icon: "backend.svg",
      skills: ["PHP", "Symfony", "MySQL", "Firebase"],
    },
    tools: {
      title: "Outils",
      icon: "tools.svg",
      skills: ["Visual Studio Code", "Git & Github", "Notion"],
    },
  };

  return (
    <section className="section skills" ref={ref}>
      <div className="section__container">
        <h2 className="xs-no-mb">Mes skills</h2>

        <div className="skills-content">
          {Object.keys(skillCategories).map((categoryName) => {
            const category = skillCategories[categoryName];

            return (
              <div className="skills-block" key={categoryName}>
                <img
                  className="skills-block__icon"
                  src={`/assets/images/skills-icons/${category.icon}`}
                  alt={`Icône ${category.title}`}
                />
                <h3 className="skills-block__title">{category.title}</h3>
                <ul className="skills-block__list">
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
