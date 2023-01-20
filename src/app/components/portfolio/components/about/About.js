import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>A propos de moi</h2>
      <div className={styles.body}>
        <div className={styles.description}>
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
        <div className={styles.infos}>
          <div className={styles.infoCard}>
            <p className={styles.infoTitle}>Localisation</p>
            <div className={styles.location}>
              <span className={styles.franceFlag}></span>
              <p>
                Tours, <span className="uppercase">France</span>
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoTitle}>Email</p>
            <a href="mailto:jules.pascot@gmail.com" className={styles.link}>
              jules.pascot@gmail.com <i className="fa-solid fa-arrow-up"></i>
            </a>
          </div>
          <div className={styles.infoCard}>
            <p className={styles.infoTitle}>Réseaux</p>
            <div className={styles.socialNetworks}>
              <ul>
                <li>
                  <a
                    href="https://github.com/Biskotte23"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Biskotte23"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
