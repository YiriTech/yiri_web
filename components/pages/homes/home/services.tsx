import Link from 'next/link';

// Données des services YIRI TECH AFRICA
const yiriServicesData = [
  {
    id: 1,
    icon: <i className="fas fa-graduation-cap"></i>,
    title: "YIRI Academy",
    description: "Formations pratiques en data, développement, IA, cybersécurité et design via ateliers, bootcamps et programmes hybrides"
  },
  {
    id: 2,
    icon: <i className="fas fa-laptop-code"></i>,
    title: "YIRI Digital",
    description: "Accompagnement des TPE/PME dans leur transformation digitale, diagnostics numériques et création d'outils de gestion"
  },
  {
    id: 3,
    icon: <i className="fas fa-lightbulb"></i>,
    title: "YIRI Think Tank",
    description: "Production de notes de réflexion, rapports stratégiques et veille technologique africaine pour influencer les politiques publiques"
  },
  {
    id: 4,
    icon: <i className="fas fa-users"></i>,
    title: "YIRI Conférences",
    description: "Organisation d'événements, panels et journées tech avec des invités africains et internationaux, accessibles gratuitement"
  },
  {
    id: 5,
    icon: <i className="fas fa-trophy"></i>,
    title: "Concours d'Innovation",
    description: "Détection et soutien de projets locaux à fort impact dans la santé, l'agriculture et l'éducation"
  },
  {
    id: 6,
    icon: <i className="fas fa-network-wired"></i>,
    title: "Réseau & Partenariats",
    description: "Connecter les talents aux entreprises, institutions et opportunités pour créer un écosystème tech africain dynamique"
  }
];

const ServicesTwo = () => {
  return (
    <>
      <div className="services__two section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-6">
              <div className="services__two-title">
                <span className="subtitle-one">Nos Axes Stratégiques</span>
                <h2>La Tech comme Levier de Développement</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            {yiriServicesData?.map((data, id) => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                  <div className="services__two-single-service">
                    <div className="services__two-single-service-icon">
                      {data.icon}
                    </div>
                    <div className="services__two-single-service-content">
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      <Link href={`/services/${data.id}`} className="btn-three">
                        En savoir plus<i className="fas fa-chevron-right"></i>
                      </Link>
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

export default ServicesTwo;