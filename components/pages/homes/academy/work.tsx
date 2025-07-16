import workBg from "../../../../public/assets/img/work-process/work-process-bg.png";
import image1 from "../../../../public/assets/img/work-process/work-process-1.png";
import image2 from "../../../../public/assets/img/work-process/work-process-2.png";
import Count from "../../common/count";

const WorkArea = () => {
    return (
        <div className="work-process-area__one section-padding" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row align-items-end work-process-area__one-title">
                    <div className="col-xl-7 col-lg-7">
                        <div className="work-process-area__one-content-left">
                            <span className="subtitle-one">Notre Méthode</span>
                            <h2>Formation pratique et inclusive</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                        <div className="work-process-area__one-content-right">
                            <p>Une approche pédagogique innovante combinant théorie et pratique pour former les talents tech de demain</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-xl-6">
                        <div className="work-process-area__one-single-work">
                            <span>01</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Évaluation des Compétences</h4>
                                <p>Diagnostic initial pour identifier le niveau et les objectifs de chaque apprenant, quel que soit son parcours.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>02</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Formation Pratique</h4>
                                <p>Apprentissage par projets concrets, ateliers pratiques et bootcamps intensifs pour une montée en compétences rapide.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>03</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Accompagnement & Insertion</h4>
                                <p>Suivi personnalisé et accompagnement vers l'emploi avec nos partenaires entreprises et startups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="work-process-area__one-right-img">
                            <img src={image1.src} alt="image" />
                        </div>
                        <div className="work-process-area__one-right-counter-img">
                            <div className="img-counter">
                                <div className="counter-only">
                                    <h2 className="counter"><Count number={2}/></h2>
                                    <h2>+</h2>
                                </div>
                                <span>pays cibles</span>
                            </div>
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkArea;