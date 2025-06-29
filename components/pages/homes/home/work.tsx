import Link from "next/link";

const WorkProcess = () => {
    return (
        <div className="work-process__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="work-process__two-title">
                            <span className="subtitle-one">Nos activités</span>
                            <h2>Nos domaines d'activités</h2>
                        </div>
                    </div>
                </div>
                <div className="work-process__two-cards">
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>01.</span>
                                <h4>Conférences</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-laptop-1"></i>
                            </div>
                        </div>
                        <p>Nous organisons des conférences et des ateliers pour partager nos connaissances et nos expériences.</p>
                        <Link href="/about" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
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
                                <h4>Formation</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-iphone-1"></i>
                            </div>
                        </div>
                            <p>Nous offrons des formations en informatique et en sciences des données pour les entreprises et les particuliers.</p>
                        <Link href="/about" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
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
                                <h4>Réflexion et Innovation</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-mobile-data"></i>
                            </div>
                        </div>
                            <p>Nous réfléchissons à des sujets de société et de politique pour les entreprises et les particuliers et nous innovons dans ces domaines.</p>
                        <Link href="/about" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;