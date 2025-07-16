import image1 from "../../../../public/assets/img/about/about-three.png";
import image2 from "../../../../public/assets/img/about/about-three-2.png";
import image3 from "../../../../public/assets/img/about/about-three-3.png";
import Count from "../../common/count";

const AboutThree = () => {
    return (
        <div className="about__three section-padding">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
                        <div className="about__three-content">
                            <span className="subtitle-one">Nos ambitions pour 2025-2026</span>
                            <h2>Pour un Think Tank africain d'impact</h2>
                            <p></p>
                            <div className="about__three-content-service">
                                <ul style={{textAlign: 'left', fontSize: '1.1rem', lineHeight: '2', margin: 0, padding: 0, listStyle: 'disc inside'}}>
                                    <li>Réaliser 2 rapports stratégiques sur le numérique en Afrique de l’Ouest</li>
                                    <li>Organiser des tables rondes thématiques avec décideurs et acteurs terrain</li>
                                    <li>Créer un réseau d’experts africains et de la diaspora</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="about__three-right">
                            <div className="row align-items-center">
                                <div className="about__three-right-counter">
                                    <h4 className="counter">+<Count number={10}/></h4>
                                    <span>Experts</span>								
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-6 col-sm-6">
                                    <div className="about__three-right-image-left-side">
                                        <img src={image1.src} alt="image" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-6">
                                    <div className="about__three-right-image">
                                        <img src={image2.src} alt="image" />
                                    </div>
                                    <div className="about__three-right-image">
                                        <img src={image3.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThree;