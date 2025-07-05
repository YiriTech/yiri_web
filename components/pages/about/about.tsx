import brand1 from "../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../public/assets/img/brand/brand-5.png";
import about1 from "../../../public/assets/img/about/about-1.png";
import about2 from "../../../public/assets/img/about/about-2.png";
import Link from "next/link";
import Count from "../common/count";
import WorkArea from "../homes/academy/work";
import Testimonial from "../homes/academy/testimonial";

const AboutMain = () => {
    return (
        <>
        <div className="about__one section-padding">
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__one-image">
                            <div className="experience-bar animate-y-axis-slider">
                                <i className="flaticon-consultant"></i>
                                <div className="experience-bar-right">
                                    <div className="experience-bar-counter">
                                        <h4 className="counter"><Count number={36}/></h4>
                                        <span>%</span>
                                    </div>
                                    <span>Accès Internet en Afrique de l'Ouest</span>
                                </div>
                            </div>
                            <div className="about__one-image-wrapper">
                                <img src={about1.src} alt="image" className="image-1" />
                                <img src={about2.src} alt="image" className="image-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">Notre Vision</span>
                            <h2>Une Afrique Technologiquement Souveraine</h2>
                            <p>YIRI TECH AFRICA vise une Afrique technologiquement souveraine, portée par sa jeunesse. Notre mission est de créer une structure d'impact numérique capable de former les jeunes, connecter les talents, accompagner les initiatives locales et influencer les politiques publiques.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Innovation locale et inclusive</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Partage et coopération</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Action concrète et durable</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Accessibilité pour tous</span>
                                </div>
                            </div>
                            <Link href="/services" className="btn-one">Nos Programmes<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Section Contexte et Problématique */}
        <div className="about__one section-padding pt-0">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">Contexte et Problématique</span>
                            <h2>Les Défis de la Transition Numérique en Afrique</h2>
                            <p>L'Afrique subsaharienne est en pleine transition numérique, mais rencontre des difficultés dues à un accès limité aux outils, au savoir-faire et à l'écosystème digital. 60% de la population africaine a moins de 25 ans, mais ce potentiel est sous-exploité en raison du manque de formations pratiques et d'une faible culture numérique.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-exclamation-triangle"></i>
                                    <span>Accès limité aux outils numériques</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-exclamation-triangle"></i>
                                    <span>Manque de formations pratiques</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-exclamation-triangle"></i>
                                    <span>Faible culture numérique</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-exclamation-triangle"></i>
                                    <span>Écosystème digital insuffisant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__one-image">
                            <div className="about__one-image-wrapper">
                                <img src={about2.src} alt="image" className="image-1" />
                                <img src={about1.src} alt="image" className="image-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Section Feuille de Route */}
        <div className="about__one section-padding pt-0">
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-5">
                        <div className="about__one-image">
                            <div className="experience-bar animate-y-axis-slider">
                                <i className="fas fa-calendar-alt"></i>
                                <div className="experience-bar-right">
                                    <div className="experience-bar-counter">
                                        <h4 className="counter"><Count number={200}/></h4>
                                        <span>+</span>
                                    </div>
                                    <span>Jeunes à former d'ici 2026</span>
                                </div>
                            </div>
                            <div className="about__one-image-wrapper">
                                <img src={about1.src} alt="image" className="image-1" />
                                <img src={about2.src} alt="image" className="image-2" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">Feuille de Route 2025-2026</span>
                            <h2>Phase 1 : Lancement & Structuration</h2>
                            <p>Notre plan d'action vise à créer un impact concret et mesurable sur le développement numérique de l'Afrique francophone, en commençant par la Guinée et en s'étendant progressivement.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-calendar-check"></i>
                                    <span>Juin 2025 : Lancement officiel</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-calendar-check"></i>
                                    <span>Été 2025 : Premiers partenariats</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-calendar-check"></i>
                                    <span>Automne 2025 : Première conférence</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-calendar-check"></i>
                                    <span>Début 2026 : Plateforme en ligne</span>
                                </div>
                            </div>
                            <Link href="/contact" className="btn-one">Rejoindre l'Aventure<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="brand__area section-padding pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WorkArea />
        <Testimonial />
        </>
    );
};

export default AboutMain;