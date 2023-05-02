import { forwardRef } from "react";
import { myself } from "../../../../../data/myself.js";

/**
 * Contact section.
 *
 * @param {*} props Properties of the element.
 * @param {object} ref Element reference.
 * @return {JSX.Element} Contact section.
 */
export const Contact = forwardRef((props, ref) => {
    return (
        <section className="section contact" ref={ref}>
            <div className="section__container">
                <h2 className="xs-no-mb">Contactez-moi</h2>
                <div className="contact-content">
                    <div className="contact-content__info">
                        <div className="message">
                            <p className="message__sentence">
                                Bien que je sois actuellement encore en école
                                d'ingénieur, je reste ouvert à toute
                                proposition.
                            </p>
                            <p className="message__sentence">
                                N'hésitez pas à me contacter pour toute question
                                ou juste pour faire un petit coucou, je me ferai
                                un plaisir de vous répondre !
                            </p>
                        </div>
                        <div className="location">
                            <h3 className="location__title">
                                <i className="fa-solid fa-location-dot"></i>
                                Localisation actuelle
                            </h3>
                            {myself.addresses.map((address) => {
                                return (
                                    <a
                                        key={address.url}
                                        className="location__city link--highlighted"
                                        href={address.url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {address.city} {address.postalCode}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <a
                        className="contact-content__button button"
                        href={`mailto:${myself.mail}`}
                    >
                        Me contacter
                    </a>
                </div>
            </div>
        </section>
    );
});
