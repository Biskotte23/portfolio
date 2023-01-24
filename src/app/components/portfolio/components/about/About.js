export default function About() {
  return (
    <div>
      <h2>A propos de moi</h2>
      <div className="about">
        <div className="about__description">
          <p>Moi c'est Jules, 21 ans, étudiant en informatique.</p>
          <p>
            Passionné de développement web et mobile, j'ai d'abord commencé mes
            études par un DUT Informatique à l'
            <a href="https://iutdijon.u-bourgogne.fr/www/">IUT de Dijon</a>,
            avant de poursuivre en école d'ingénieur à{" "}
            <a href="https://polytech.univ-tours.fr/">Polytech Tours</a>, où
            j'effectue actuellement ma 4e année.
          </p>
          <p>
            Rigoureux et discipliné, je cherche sans cesse à me développer et
            acquérir de nouvelles compétences et connaissances.
          </p>
        </div>
        <div className="about__infos">
          <div className="info-card">
            <p className="info-card__title">Localisation</p>
            <div className="info-card__content">
              <span className="france-flag"></span>
              <p>
                Tours, <span className="uppercase">France</span>
              </p>
            </div>
          </div>
          <div className="info-card">
            <p className="info-card__title">Email</p>
            <div className="info-card__content">
              <a href="mailto:jules.pascot@gmail.com" className="link">
                jules.pascot@gmail.com <i className="fa-solid fa-arrow-up"></i>
              </a>
            </div>
          </div>
          <div className="info-card">
            <p className="info-card__title">Réseaux</p>
            <ul className="info-card__content social-networks">
              <li>
                <a
                  href="https://github.com/Biskotte23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Biskotte23"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
