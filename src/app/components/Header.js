import { useState } from "react";
import cv from "../../../src/assets/pdfs/CV.pdf";

function Logo() {
  return (
    <a className="logo" href="/">
      <div className="logo__J"></div>
    </a>
  );
}

function Nav({ handleAnchorLinkClick }) {
  const links = [
    {
      title: "À Propos",
      href: "about",
    },
    {
      title: "Expérience",
      href: "experience",
    },
    {
      title: "Projets",
      href: "projects",
    },
    {
      title: "Contact",
      href: "contact",
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
              <a
                className="link--highlighted"
                href={`#${link.href}`}
                onClick={() => handleAnchorLinkClick(link.href)}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <a className="button" href={cv} target="_blank" rel="noreferrer">
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

function AsideMenu({ displayed, handleAnchorLinkClick, hideAsideMenu }) {
  function handleAnchorLinkAndHideMenuClick(anchor) {
    hideAsideMenu();
    handleAnchorLinkClick(anchor);
  }

  return (
    <aside
      className={`aside-menu ${displayed ? "" : "hidden"}`}
      onClick={hideAsideMenu}
      onTouchStart={hideAsideMenu}
    >
      <Nav handleAnchorLinkClick={handleAnchorLinkAndHideMenuClick} />
    </aside>
  );
}

export default function Header({ handleAnchorLinkClick }) {
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
      <Nav handleAnchorLinkClick={handleAnchorLinkClick} />
      <AsideMenu
        displayed={isAsideMenuDisplayed}
        handleAnchorLinkClick={handleAnchorLinkClick}
        hideAsideMenu={hideAsideMenu}
      />
      <MenuButton
        onClick={toggleAsideMenuDisplay}
        isActive={isAsideMenuDisplayed}
      />
    </header>
  );
}
