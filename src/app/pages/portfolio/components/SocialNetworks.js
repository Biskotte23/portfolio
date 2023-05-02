import { myself } from "../../../../data/myself.js";

/**
 * Social networks list.
 *
 * @returns {JSX.Element} Social networks list.
 */
export function SocialNetworks() {
    const socialNetworks = {
        github: "fa-brands fa-github",
        instagram: "fa-brands fa-instagram",
        linkedin: "fa-brands fa-linkedin",
    };

    return (
        <ul className="social-networks">
            {myself.socialNetworks.map((network) => {
                let link = null;

                if (
                    Object.keys(socialNetworks).find(
                        (name) => name === network.name
                    )
                ) {
                    link = (
                        <li key={network.name}>
                            <a
                                href={network.url}
                                target="_blank"
                                rel="noreferrer"
                                className="link--highlighted"
                            >
                                <i className={socialNetworks[network.name]}></i>
                            </a>
                        </li>
                    );
                }

                return link;
            })}
        </ul>
    );
}

/**
 * Social networks bar on the side of the portfolio.
 *
 * @returns {JSX.Element} Social networks bar on the side of the portfolio.
 */
export function SocialNetworksSideBar() {
    return (
        <div className="side-bar--social-networks">
            <SocialNetworks />
            <div className="side-bar__vertical-line"></div>
        </div>
    );
}
