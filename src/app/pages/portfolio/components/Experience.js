import { experiences } from "../../../../data/experience";

function getExperiences() {
  const experienceList = experiences.map((experience) => (
    <li
      className="experience-card"
      key={experience.company.logo}
      onClick={() => {
        console.log("Click");
      }}
    >
      <div
        style={{
          backgroundImage: `url(${experience.company.logo})`,
        }}
        className="experience-card__image"
      >
        <div className="experience-card__image--hover">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            expedita eaque aliquid minus, fuga nisi debitis molestias commodi
            fugit laboriosam iste.
          </p>
        </div>
      </div>
      <div className="experience-card-bar">
        <div className="experience-card-bar-heading">
          <p className="experience-card-bar-heading__title">
            {experience.company.title}
          </p>
          <p className="experience-card-bar-heading__function">
            {experience.function}
          </p>
        </div>
        <div className="experience-card-bar__arrow-icon">
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </li>
  ));

  return <ul className="experience-list">{experienceList}</ul>;
}

export default function Experience() {
  return (
    <div className="experience">
      <h2>Expériences professionnelles</h2>
      {getExperiences()}
    </div>
  );
}
