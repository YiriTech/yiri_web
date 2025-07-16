import Link from "next/link";

import about1 from "../../../../public/assets/img/about/about-five-1.png";
import about2 from "../../../../public/assets/img/about/about-five-2.png";
import aboutBg from "../../../../public/assets/img/about/about-five-bg.png";

const AboutDigital = () => {
    return (
        <>
        <div className="about__five section-padding" style={{backgroundImage: `url(${aboutBg.src})`}}>
            
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-8">
                        <div className="about__five-image">
                            <div className="about__five-image-wrapper">
                                <img src={about1.src} alt="image" />
                                <img src={about2.src} alt="image" className="image-2 animate-y-axis-slider" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__five-content">
                            <span className="subtitle-one">Nos ambitions pour 2025-2026</span>
                            <h2>Accélérer la digitalisation des TPE/PME africaines</h2>
                            <div className="about__five-content-service">
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Solutions digitales pour les TPE/PME</h4>
                                        <p>Permettre à 10 TPE/PME pilotes d’intégrer des solutions digitales simples et efficaces.</p>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Formation au numérique</h4>
                                        <p>Former les gestionnaires et employés à l’usage quotidien d’outils numériques.</p>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Communauté d’entrepreneurs connectés</h4>
                                        <p>Créer une communauté d’entrepreneurs ouverts à l’innovation et au partage d’expériences.</p>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Réduire la fracture numérique</h4>
                                        <p>Réduire l’écart entre grandes entreprises et structures locales grâce à l’accompagnement digital.</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="mailto:contact@yiri.tech" className="btn-one">Nous contacter
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutDigital;