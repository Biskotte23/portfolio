import styles from "./Presentation.module.scss";

export default function Presentation() {
  return (
    <div className={styles.presentation}>
      <div className={styles.profileContainer}>
        <div className={styles.profile}></div>
      </div>
      <div className={styles.info}>
        <h1>
          Jules <span className="uppercase">Pascot</span>
        </h1>
        <p className={styles.shortDescription}>
          Etudiant en informatique basé sur Tours.
        </p>
      </div>
    </div>
  );
}
