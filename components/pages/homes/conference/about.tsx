import Link from "next/link";
import about1 from "../../../../public/assets/img/about/about-four-1.png";
import about2 from "../../../../public/assets/img/about/about-four-2.png";

const AboutConferences = () => {
    return (
        <>
            <div className="about__four section-padding">
                <div className="container">
                    <div className="row align-items-center flex-wrap-reverse gy-4">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about__four-image">
                                {/* <div className="experience-bar animate-y-axis-slider">
                                    <div className="experience-bar-right">
                                        <div className="experience-bar-counter">
                                            <h4 className="counter">25</h4>
                                            <span>+</span>
                                        </div>
                                        <span>Years Of Experience</span>
                                    </div>
                                </div> */}
                                <div className="about__four-image-wrapper">
                                    <img className="image-1" src={about1.src} alt="image" />
                                    <img className="image-2" src={about2.src} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-9">
                            <div className="about__four-content">
                                <span className="subtitle-one">À propos</span>
                                <h2>Une plateforme panafricaine de dialogue et d’inspiration</h2>
                                <p>Le numérique en Afrique ne doit pas être réservé à une élite : il faut sensibiliser largement et connecter les acteurs (jeunes, entreprises, institutions) autour des enjeux technologiques. YIRI CONFÉRENCES ambitionne de devenir un espace où se rencontrent talents émergents, leaders du numérique et décideurs engagés pour l’innovation locale.</p>
                                <div className="about__four-content-service">
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Conférences et panels thématiques : cybersécurité, IA, entrepreneuriat numérique, inclusion des femmes dans la tech</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Webinaires et lives interactifs accessibles aux jeunes partout en Afrique</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Réseautage et mise en relation entre étudiants, startups, PME et grandes entreprises tech</span>
                                    </div>
                                    <div className="service">
                                        <i className="fas fa-check-circle"></i>
                                        <span>Publication des actes et vidéos des conférences pour élargir l’impact</span>
                                    </div>
                                </div>
                                <Link href="mailto:contact@yiri.tech" className="btn-one">Nous contacter<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutConferences;