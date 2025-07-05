import Link from "next/link";

const WorkProcess = () => {
    return (
        <div className="work-process__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="work-process__two-title">
                            <span className="subtitle-one">Notre Approche</span>
                            <h2>5 Axes Stratégiques pour l'Impact</h2>
                        </div>
                    </div>
                </div>
                <div className="work-process__two-cards">
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>01.</span>
                                <h4>YIRI Academy</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                        </div>
                        <p>Formations pratiques en data, développement, IA, cybersécurité et design via ateliers, bootcamps et programmes hybrides.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>02.</span>
                                <h4>YIRI Digital</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                        </div>
                            <p>Accompagnement des TPE/PME dans leur transformation digitale, diagnostics numériques et création d'outils de gestion.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>03.</span>
                                <h4>YIRI Think Tank</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                        </div>
                            <p>Production de notes de réflexion, rapports stratégiques et veille technologique africaine pour influencer les politiques publiques.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>04.</span>
                                <h4>YIRI Conférences</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>
                            <p>Organisation d'événements, panels et journées tech avec des invités africains et internationaux, accessibles gratuitement.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>05.</span>
                                <h4>Concours d'Innovation</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="fas fa-trophy"></i>
                            </div>
                        </div>
                            <p>Détection et soutien de projets locaux à fort impact dans la santé, l'agriculture et l'éducation.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;