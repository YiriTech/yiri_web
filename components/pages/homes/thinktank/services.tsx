import Link from 'next/link';

const ServicesThinkTankData = [
    {
        id: 'notes-veille-rapports',
        icon: <i className="fas fa-file-alt"></i>,
        title: 'Notes de veille & Rapports',
        des: 'Production de notes de veille, rapports d’analyse et études stratégiques pour éclairer la transformation numérique africaine.',
    },
    {
        id: 'recommandations-politiques',
        icon: <i className="fas fa-balance-scale"></i>,
        title: 'Recommandations',
        des: 'Élaboration de recommandations pour les politiques publiques en éducation, inclusion numérique et data, adaptées aux réalités locales.',
    },
    {
        id: 'evenements-reflexion',
        icon: <i className="fas fa-comments"></i>,
        title: 'Événements de Réflexion',
        des: 'Organisation de webinaires, panels et cafés tech pour donner la parole aux jeunes, femmes et entrepreneurs africains.',
    },
    {
        id: 'plateforme-publications',
        icon: <i className="fas fa-globe"></i>,
        title: 'Plateforme Publications',
        des: 'Mise à disposition d’une plateforme en ligne pour partager nos analyses, publications et ressources avec l’écosystème.',
    },
];


const ServicesThinkTank = () => {
    return (
        <>
            <div className="services__three section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="services__three-title text-center">
                                <span className="subtitle-one">Objectifs specifiques</span>
                                <h2>Réflexion, analyse et impact pour la transformation numérique <span className="highlighted-two">africaine</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center flex-wrap services__three-items">
                        {ServicesThinkTankData?.slice(0, 3).map((data, id) => {
                            return (
                                <div className="col-lg-4 col-md-6 item" key={id}>
                                    <div className="services__three-single-service">
                                        <div className="services__three-single-service-icon">
                                        {data.icon} 
                                        </div>
                                        <div className="services__three-single-service-content">
                                            <h4>{data.title}</h4>
                                            <p>{data.des}</p>
                                            {/* <Link href={`/services/${data.id}`} className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link> */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>      
        </>
    );
};

export default ServicesThinkTank;