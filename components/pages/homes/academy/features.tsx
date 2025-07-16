import image from "../../../../public/assets/img/service/services.png";

const Features = () => {
    return (
        <>
        <div className="services__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-7 col-lg-7 col-md-9 services__one-title">
                        <span className="subtitle-one">Nos Formations</span>
                        <h2>Former les compétences numériques de demain</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-global-network"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Entreprenariat</h4>
                                        <p>Apprendre et comprendre le monde de l'entreprenariat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6 xl-mb-30">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-mobile-phone-1"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Intelligence Artificielle</h4>
                                        <p>Formations pratiques en analyse de données et intelligence artificielle</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="services-image-wrapper">
                            <img src={image.src} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="row">
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-idea"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Soft Skills</h4>
                                        <p>De l'Art Oratoire au developpement personnel</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-md-6">
                                <div className="single-service">
                                    <div className="services__one-single-service-icon">
                                        <i className="flaticon-it"></i>
                                    </div>
                                    <div className="services__one-single-service-content">
                                        <h4>Informatique et finance</h4>
                                        <p>Comprendre l'écosysteme complexe de l'informatique et de la finance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Features;