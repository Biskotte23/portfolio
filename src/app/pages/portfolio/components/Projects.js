import { forwardRef } from "react";
import DoubleBorderImage from "../../../../components/DoubleBorderImage";
import { projects } from "../../../../data/projects";

function getMainProjects() {
    return (
        <div className="primary-projects">
            {projects
                .filter((project) => project.status === "primary")
                .map((project) => {
                    return (
                        <div className="project-card" key={project.title}>
                            <a className="project-card__cover" href="/">
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

function getOtherProjects() {
    return (
        <div className="secondary-projects">
            {projects
                .filter((project) => project.status === "secondary")
                .map((project) => {
                    return (
                        <a
                            className="project-card--secondary"
                            key={project.title}
                            href="/"
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
    );
}

export const Projects = forwardRef((posts, ref) => {
    return (
        <section className="section projects" ref={ref}>
            <div className="section__container">
                <h2 className="xs-no-mb">Mon travail</h2>

                <div className="projects-content">
                    {getMainProjects()}
                    <h3>Autres projets notoires</h3>
                    {getOtherProjects()}
                </div>
            </div>
        </section>
    );
});
