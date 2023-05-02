import { myself } from "../../../../data/myself.js";

/**
 * Contact bar on the side of the portfolio.
 *
 * @returns {JSX.Element} Contact bar on the side of the portfolio.
 */
export default function ContactSideBar() {
    return (
        <div className="side-bar--contact">
            <div className="side-bar__contact">
                <a className="link--highlighted" href={`mailto:${myself.mail}`}>
                    {myself.mail}
                </a>
            </div>
            <div className="side-bar__vertical-line"></div>
        </div>
    );
}
