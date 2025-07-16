import workBg from "../../../../public/assets/img/work-process/work-process-bg-2.png";
import arrow1 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";
import arrow2 from "../../../../public/assets/img/work-process/work-process-arrow-2.png";
import arrow3 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";

const WorkAreaFive = () => {
    return (        
        <div className="work-process__three" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <span className="subtitle-one">Notre démarche</span>
                        <h2>Un accompagnement digital sur-mesure</h2>
                    </div>
                </div>
                <div className="work-process__three-card">
                    <div className="work-process__three-card-arrows">
                        <img src={arrow1.src} alt="arrow" className="arrow-1" />
                        <img src={arrow2.src} alt="arrow" className="arrow-2" />
                        <img src={arrow3.src} alt="arrow" className="arrow-3" />
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>01</h3>
                        <h5>Diagnostic numérique gratuit</h5>
                        <p>Identifier les besoins spécifiques des entreprises (site web, gestion, communication).</p>
                    </div>
                    <div className="work-process__three-card-single middle">
                        <h3>02</h3>
                        <h5>Création de solutions digitales adaptées</h5>
                        <p>Sites vitrines et e-commerce clé en main. Outils de gestion simplifiés (facturation, gestion de stock, CRM).</p>
                    </div>
                    <div className="work-process__three-card-single middle">
                        <h3>03</h3>
                        <h5>Formation des responsables d’entreprise</h5>
                        <p>Ateliers pratiques sur les outils numériques (WhatsApp Business, Google Workspace, etc.).</p>
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>04</h3>
                        <h5>Suivi et accompagnement</h5>
                        <p>3 mois de support post-digitalisation pour garantir une adoption réussie.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkAreaFive;