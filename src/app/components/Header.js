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

function MenuButton({ onClick }) {
  return (
    <button className="aside-menu-button" onClick={onClick}>
      <div className="aside-menu-button__bar aside-menu-button__bar--1"></div>
      <div className="aside-menu-button__bar aside-menu-button__bar--2"></div>
      <div className="aside-menu-button__bar aside-menu-button__bar--3"></div>
    </button>
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
  const [isAsideMenuDisplay, setAsideMenuDisplay] = useState(false);

  function toggleAsideMenuDisplay() {
    setAsideMenuDisplay(!isAsideMenuDisplay);
  }

  function hideAsideMenu() {
    setAsideMenuDisplay(false);
  }

  let body = document.querySelector("body");
  let pageContent = document.querySelector(".page__content");

  if (isAsideMenuDisplay) {
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
      <AsideMenu displayed={isAsideMenuDisplay} onClick={hideAsideMenu} />
      <MenuButton onClick={toggleAsideMenuDisplay} />
    </header>
  );
}
