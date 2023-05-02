import { SocialNetworks } from "./SocialNetworks";
import { myself } from "../../../../data/myself.js";

/**
 * Footer of the application.
 *
 * @returns {JSX.Element} Footer of the application.
 */
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <SocialNetworks />
            <p className="footer__sentence">
                {myself.firstName}{" "}
                <span className="uppercase">{myself.lastName}</span>
                <span className="copyright"> © {year}</span>
            </p>
        </footer>
    );
}
