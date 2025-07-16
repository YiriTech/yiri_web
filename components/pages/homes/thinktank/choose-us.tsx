import Link from "next/link";
import image1 from "../../../../public/assets/img/why-choose-us/why-chose-us-two.png";

const ChooseUsThree = () => {
    return (
        <>
        <div className="why-choose-us__two section-padding">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="why-choose-us__two-content">
                            <span className="subtitle-one">Pourquoi nous choisir ?</span>
                            <h2>Un laboratoire d’idées <span className="highlighted-two">africain</span> pour la transformation numérique</h2>
                            <p>YIRI THINK TANK rassemble des experts, des jeunes, des femmes et des entrepreneurs pour produire des analyses, des recommandations et des événements qui font avancer l’Afrique numérique. Nous connectons le terrain et les décideurs pour des politiques plus inclusives et innovantes.</p>
                            <div className="why-choose-us__two-content-service">
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Analyses et rapports adaptés aux réalités africaines</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Réseau d’experts africains et de la diaspora</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Événements de réflexion ouverts à tous</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Impact sur les politiques publiques et l’écosystème tech</span>
                                </div>
                            </div>
                            <Link href="mailto:contact@yiri.tech" className="btn-one">Nous contacter
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-us__two-image">
                            <div className="why-choose-us__two-image-wrapper">
                                <img src={image1.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ChooseUsThree;