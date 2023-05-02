import { useState } from "react";
import cv from "../../../../assets/pdfs/CV.pdf";

/**
 * Header logo.
 *
 * @returns {JSX.Element} Header logo.
 */
function Logo() {
    return (
        <a className="logo" href="/">
            <div className="logo__J"></div>
        </a>
    );
}

/**
 * Header navigation bar.
 *
 * @param {function} handleAnchorLinkClick Function for managing clicks on anchor links.
 * @returns {JSX.Element} Header navigation bar.
 */
function Nav({ handleAnchorLinkClick }) {
    const links = [
        {
            title: "À Propos",
            href: "about",
        },
        {
            title: "Skills",
            href: "skills",
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

/**
 * Navigation bar button.
 *
 * @param {function} onClick Function called when the button is clicked.
 * @param {boolean} isActive Whether the button is active or not.
 * @returns {JSX.Element} Navigation bar button.
 */
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

/**
 * Aside menu on mobile devices.
 *
 * @param {boolean} displayed Whether the menu is displayed or not.
 * @param {function} handleAnchorLinkClick Function for managing clicks on anchor links.
 * @param {function} hideAsideMenu Function that hides the aside menu.
 * @returns {JSX.Element} Aside menu on mobile devices.
 */
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

/**
 * Header of the portfolio.
 *
 * @param {function} handleAnchorLinkClick Function for managing clicks on anchor links..
 * @returns {JSX.Element} Header of the portfolio.
 */
export default function Header({ handleAnchorLinkClick }) {
    const [isAsideMenuDisplayed, setAsideMenuDisplay] = useState(false);
    let body = document.querySelector("body");
    let pageContent = document.querySelector(".page__content");

    // Toggles the display of the aside menu.
    function toggleAsideMenuDisplay() {
        setAsideMenuDisplay(!isAsideMenuDisplayed);
    }

    // Hides the aside menu.
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
