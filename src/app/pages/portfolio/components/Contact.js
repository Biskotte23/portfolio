import { forwardRef } from "react";

export const Contact = forwardRef((posts, ref) => {
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
                            <a
                                className="location__city link--highlighted"
                                href="/"
                            >
                                Tours 37200
                            </a>
                            <hr />
                            <a
                                className="location__city link--highlighted"
                                href="/"
                            >
                                Beaune 21200
                            </a>
                        </div>
                    </div>

                    <a
                        className="contact-content__button button"
                        href="mailto:jules.pascot@gmail.com"
                    >
                        Me contacter
                    </a>
                </div>
            </div>
        </section>
    );
});
