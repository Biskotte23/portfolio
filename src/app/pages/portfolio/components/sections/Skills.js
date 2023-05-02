import { forwardRef } from "react";
import { myself } from "../../../../../data/myself.js";

/**
 * Skills section.
 *
 * @param {*} props Element properties.
 * @param {object} ref Element reference.
 * @return {JSX.Element} Skills section.
 */
export const Skills = forwardRef((props, ref) => {
    const skillCategories = {
        frontend: {
            title: "Frontend",
            icon: "frontend.svg",
            skills: myself.skills.frontend,
        },
        backend: {
            title: "Backend",
            icon: "backend.svg",
            skills: myself.skills.backend,
        },
        tools: {
            title: "Outils",
            icon: "tools.svg",
            skills: myself.skills.tools,
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
                                <h3 className="skills-block__title">
                                    {category.title}
                                </h3>
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
