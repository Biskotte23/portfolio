export default function Header() {
  return (
    <header className="header">
      <a className="logo-j  " href="/">
        J
      </a>
      <nav className="menu">
        <ul>
          <li>
            <a className="link--highlighted" href="/">
              À Propos
            </a>
          </li>
          <li>
            <a className="link--highlighted" href="/">
              Expérience
            </a>
          </li>
          <li>
            <a className="link--highlighted" href="/">
              Projets
            </a>
          </li>
          <li>
            <a className="link--highlighted" href="/">
              Contact
            </a>
          </li>
        </ul>
        <a className="button" href="/">
          Curiculum Vitae
        </a>
      </nav>
    </header>
  );
}
