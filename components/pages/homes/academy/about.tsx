import about1 from "../../../../public/assets/img/about/academy/academy-about-1.png";
import about2 from "../../../../public/assets/img/about/academy/academy-about-2.png";
import Link from "next/link";
import Count from "../../common/count";

const About = () => {
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
                                        <h4 className="counter"><Count number={25}/></h4>
                                        <span>+</span>
                                    </div>
                                    <span>Formations</span>
                                </div>
                            </div>
                             {/* Images principales avec effets */}
                             <div className="about__one-image-wrapper position-relative">
                                <div className="position-relative">
                                    <img src={about1.src} alt="YIRI Academy Formation" 
                                         className="image-1 rounded-3 shadow-lg hover-shadow-xl transition-all" 
                                         style={{width: '100%', height: 'auto', transform: 'rotate(-2deg)'}} />
                                    <div className="position-absolute max-md:hidden" style={{bottom: '-20px', right: '-20px'}}>
                                        <img src={about2.src} alt="YIRI Academy Étudiants" 
                                             className="image-2 rounded-3 shadow-lg hover-shadow-xl transition-all" 
                                             style={{width: '150px', height: 'auto', transform: 'rotate(3deg)' }} />
                                    </div>
                                </div>

                                {/* Badge de qualité */}
                                <div className="position-absolute bg-warning text-dark rounded-pill px-3 py-2 shadow-lg" 
                                     style={{top: '20px', left: '20px'}}>
                                    <i className="fas fa-star me-2"></i>
                                    <span className="fw-bold">Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__one-content">
                            <span className="subtitle-one">Origine du projet</span>
                            <h2>YIRI TECH AFRICA</h2>
                            <p>Porté par des jeunes ingénieurs africains en formation au Maroc, convaincus que la technologie peut (et doit) devenir un levier de souveraineté, d'inclusion et de transformation pour le continent. Le projet prend racine en Guinée, mais avec une vision panafricaine.</p>
                            <div className="about__one-content-service">
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Jeunes ingénieurs africains</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Formation au Maroc</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Vision panafricaine</span>
                                </div>
                                <div className="service">
                                    <i className="far fa-check-circle"></i>
                                    <span>Lever de souveraineté</span>
                                </div>
                            </div>
                            <Link href="/about" className="btn-one mt-3 ml-3 justify-center items-end">Découvrir Plus<i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;