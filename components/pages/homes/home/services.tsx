import Link from 'next/link';

// Données des services YIRI TECH AFRICA
const yiriServicesData = [
  {
    id: 1,
    icon: <i className="fas fa-graduation-cap"></i>,
    title: "YIRI Academy",
    description: "Formations pratiques sur les outils numériques et l'entrepreneuriat tech"
  },
  {
    id: 2,
    icon: <i className="fas fa-laptop-code"></i>,
    title: "YIRI Digital",
    description: "Accompagnement des PME dans leur transformation digitale"
  },
  {
    id: 3,
    icon: <i className="fas fa-users"></i>,
    title: "YIRI Conférences",
    description: "Événements et panels sur les enjeux tech en Afrique"
  },
  {
    id: 4,
    icon: <i className="fas fa-lightbulb"></i>,
    title: "YIRI Think Tank",
    description: "Réflexions et propositions pour les décideurs"
  },
  {
    id: 5,
    icon: <i className="fas fa-trophy"></i>,
    title: "Concours Innovation",
    description: "Soutien aux jeunes porteurs de projets tech"
  },
  {
    id: 6,
    icon: <i className="fas fa-network-wired"></i>,
    title: "Réseau Pro",
    description: "Passerelles entre étudiants, professionnels et institutions"
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