import { languages, frontend, backend, tools } from "../../../../data/skills";

function getSkills(skills) {
  const skillList = skills.map((skill) => (
    <li className="skill-card" key={skill.title}>
      <img src={skill.icon} alt={`Logo ${skill.title}`} />
      {skill.title}
    </li>
  ));

  return <ul className="skill-list">{skillList}</ul>;
}

export default function Skills() {
  return (
    <div className="skills">
      <h2>Compétences</h2>
      <h3>Langages</h3>
      {getSkills(languages)}
      <h3>Frontend</h3>
      {getSkills(frontend)}
      <h3>Backend</h3>
      {getSkills(backend)}
      <h3>Outils</h3>
      {getSkills(tools)}
    </div>
  );
}
