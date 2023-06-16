import { forwardRef, useState } from "react";
import DoubleBorderImage from "../../../../components/DoubleBorderImage";
import { projects } from "../../../../../data/projects";

/**
 * Main projects list.
 *
 * @returns {JSX.Element} Main projects list.
 */
function getMainProjects() {
    return (
        <div className="primary-projects">
            {projects
                .filter((project) => project.status === "primary")
                .map((project) => {
                    return (
                        <div className="project-card" key={project.title}>
                            <a
                                className="project-card__cover"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <DoubleBorderImage
                                    src={`/assets/images/projects/${
                                        project.cover ?? "In_progress.jpg"
                                    }`}
                                    alt={`Couverture du projet ${project.title}`}
                                />
                            </a>
                            <p className="project-card__type">{project.type}</p>
                            <h4 className="project-card__title">
                                <a className="link--highlighted" href="/">
                                    {project.title}
                                </a>
                            </h4>
                            <p className="project-card__resume">
                                {project.resume}
                            </p>
                            <ul className="project-card__technos">
                                {project.technologies.map((techno) => {
                                    return <li key={techno}>{techno}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
}

/**
 * Other projects grid.
 *
 * @returns {JSX.Element} Other projects grid.
 */
function OtherProjects() {
    const minProjectsNumber = 6;
    const [showAllProjects, setShowAllProjects] = useState(false);

    function handleClick() {
        setShowAllProjects(!showAllProjects);
    }

    let secondaryProjects = projects.filter(
        (project) => project.status === "secondary"
    );
    let projectsNumber = secondaryProjects.length;

    if (minProjectsNumber < secondaryProjects.length && !showAllProjects) {
        projectsNumber = minProjectsNumber;
    }

    return (
        <>
            <div className="secondary-projects">
                {secondaryProjects.slice(0, projectsNumber).map((project) => {
                    return (
                        <a
                            className="project-card--secondary"
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="project-card--secondary__header">
                                <i className="fa-regular fa-folder"></i>
                            </div>
                            <h5 className="project-card--secondary__title">
                                {project.title}
                            </h5>
                            <p className="project-card--secondary__resume">
                                {project.resume}
                            </p>
                            <ul className="project-card--secondary__technos">
                                {project.technologies.map((techno) => {
                                    return <li key={techno}>{techno}</li>;
                                })}
                            </ul>
                        </a>
                    );
                })}
            </div>
            {minProjectsNumber < secondaryProjects.length ? (
                <button
                    className="projects-content__button button"
                    onClick={handleClick}
                >
                    {showAllProjects ? "Voir moins" : "Voir plus"}
                </button>
            ) : null}
        </>
    );
}

/**
 * Project section.
 *
 * @param {*} props Element properties.
 * @param {object} ref Element reference.
 * @return {JSX.Element} Project section.
 */
export const Projects = forwardRef((props, ref) => {
    return (
        <section className="section projects" ref={ref}>
            <div className="section__container">
                <h2 className="xs-no-mb">Mon travail</h2>

                <div className="projects-content">
                    {getMainProjects()}
                    <h3>Autres projets notoires</h3>
                    <OtherProjects />
                </div>
            </div>
        </section>
    );
});
