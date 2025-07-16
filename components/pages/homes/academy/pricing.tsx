import Link from "next/link";

const Pricing = () => {
    return (
        <>
        <div className="pricing-plan__one section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                        <div className="pricing-plan__one-title">
                            <span className="subtitle-one">Nos Programmes</span>
                            <h2 className="mb-40">Formations Accessibles</h2>
                            <ul className="nav nav-pills mb-65 justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="monthly-pricing-tab" data-bs-toggle="pill" data-bs-target="#monthly-pricing" type="button" role="tab" aria-controls="monthly-pricing" aria-selected="true">Bootcamps</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="yearly-pricing-tab" data-bs-toggle="pill" data-bs-target="#yearly-pricing" type="button" role="tab" aria-controls="yearly-pricing" aria-selected="false">Programmes Longs</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pricing-plans tab-content">
                    <div className="row justify-content-center gy-4 tab-pane fade show active" id="monthly-pricing" role="tabpanel" aria-labelledby="monthly-pricing-tab">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Développement Web</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">2 mois
                                        <span>/intensif</span>
                                    </h2>
                                    <p>Formation complète en développement web moderne et responsive</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>HTML, CSS, JavaScript</span>
                                        <span><i className="fas fa-angle-double-right"></i>React & Node.js</span>
                                        <span><i className="fas fa-angle-double-right"></i>Projets pratiques</span>
                                    </div>
                                    <Link href="/contact" className="btn-one">S'inscrire<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan active">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Data Science</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">3 mois
                                        <span>/intensif</span>
                                    </h2>
                                    <p>Formation en science des données et intelligence artificielle</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Python & R</span>
                                        <span><i className="fas fa-angle-double-right"></i>Machine Learning</span>
                                        <span><i className="fas fa-angle-double-right"></i>Analyse prédictive</span>
                                    </div>
                                    <Link href="/contact" className="btn-two">S'inscrire<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Cybersécurité</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">2 mois
                                        <span>/intensif</span>
                                    </h2>
                                    <p>Formation spécialisée en sécurité informatique et éthique</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Pentesting</span>
                                        <span><i className="fas fa-angle-double-right"></i>Sécurité réseau</span>
                                        <span><i className="fas fa-angle-double-right"></i>Certification</span>
                                    </div>
                                    <Link href="/contact" className="btn-one">S'inscrire<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gy-4 tab-pane fade" id="yearly-pricing" role="tabpanel" aria-labelledby="yearly-pricing-tab">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Formation Complète</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">6 mois
                                        <span>/hybride</span>
                                    </h2>
                                    <p>Programme complet combinant plusieurs spécialités tech</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Développement Full-Stack</span>
                                        <span><i className="fas fa-angle-double-right"></i>Data Science</span>
                                        <span><i className="fas fa-angle-double-right"></i>Accompagnement emploi</span>
                                    </div>
                                    <Link href="/contact" className="btn-one">S'inscrire<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan active">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Programme Inclusif</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">8 mois
                                        <span>/complet</span>
                                    </h2>
                                    <p>Formation spécialement conçue pour les femmes et non-diplômés</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Remise à niveau</span>
                                        <span><i className="fas fa-angle-double-right"></i>Mentorat personnalisé</span>
                                        <span><i className="fas fa-angle-double-right"></i>Bourse possible</span>
                                    </div>
                                    <Link href="/contact" className="btn-two">S'inscrire<i className="fas fa-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="pricing-plan__one-single-pricing-wrapper">
                                <div className="pricing-plan__one-single-pricing-plan">
                                    <h3 className="pricing-plan__one-single-pricing-plan-title">Formation Entreprise</h3>
                                    <h2 className="pricing-plan__one-single-pricing-plan-price">Sur mesure
                                        <span>/entreprise</span>
                                    </h2>
                                    <p>Programmes adaptés aux besoins spécifiques des entreprises</p>
                                    <div className="pricing-plan__one-single-pricing-plan-benefits">
                                        <span><i className="fas fa-angle-double-right"></i>Formation sur site</span>
                                        <span><i className="fas fa-angle-double-right"></i>Programme personnalisé</span>
                                        <span><i className="fas fa-angle-double-right"></i>Suivi post-formation</span>
                                    </div>
                                    <Link href="/contact" className="btn-one">Demander un devis<i className="fas fa-chevron-right"></i></Link>
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

export default Pricing;