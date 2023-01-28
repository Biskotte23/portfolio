export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__sandwich"></div>
      <p className="banner__sentence-beginning">Salut, je m'appelle</p>
      <h1>
        <span className="color-primary">J</span>ules{" "}
        <span className="color-primary">P</span>ascot
      </h1>
      <p className="banner__sentence-ending">
        ...et je suis étudiant en école d'ingénieur en{" "}
        <span className="color-secondary">informatique</span>.
      </p>
      <div className="banner__sandwich">
        <a className="banner__button button" href="/">
          En savoir plus
        </a>
      </div>
    </div>
  );
}
