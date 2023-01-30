import { useState } from "react";

function Logo() {
  return (
    <a className="logo" href="/">
      <div className="logo__J"></div>
    </a>
  );
}

function Nav() {
  const links = [
    {
      title: "À Propos",
      href: "/",
    },
    {
      title: "Expérience",
      href: "/",
    },
    {
      title: "Projets",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
  ];

  return (
    <nav
      className="menu"
      onClick={(event) => event.stopPropagation()}
      onTouchStart={(event) => event.stopPropagation()}
    >
      <ul>
        {links.map((link) => {
          return (
            <li key={link.title}>
              <a className="link--highlighted" href={link.href}>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <a className="button" href="/">
        Curiculum Vitae
      </a>
    </nav>
  );
}

function MenuButton({ onClick, isActive }) {
  return (
    <div
      className={`menu-button ${isActive ? "is-active" : ""}`}
      onClick={onClick}
    >
      <div className="hamburger">
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </div>
    </div>
  );
}

function AsideMenu({ displayed, onClick }) {
  return (
    <aside
      className={`aside-menu ${displayed ? "" : "hidden"}`}
      onClick={onClick}
      onTouchStart={onClick}
    >
      <Nav />
    </aside>
  );
}

export default function Header() {
  const [isAsideMenuDisplayed, setAsideMenuDisplay] = useState(false);
  let body = document.querySelector("body");
  let pageContent = document.querySelector(".page__content");

  function toggleAsideMenuDisplay() {
    setAsideMenuDisplay(!isAsideMenuDisplayed);
  }

  function hideAsideMenu() {
    setAsideMenuDisplay(false);
  }

  if (isAsideMenuDisplayed) {
    body.classList.add("fixed");
    pageContent.classList.add("blur");
  } else {
    if (body.classList.contains("fixed")) {
      body.classList.remove("fixed");
      pageContent.classList.remove("blur");
    }
  }

  return (
    <header className="header">
      <Logo />
      <Nav />
      <AsideMenu displayed={isAsideMenuDisplayed} onClick={hideAsideMenu} />
      <MenuButton
        onClick={toggleAsideMenuDisplay}
        isActive={isAsideMenuDisplayed}
      />
    </header>
  );
}
