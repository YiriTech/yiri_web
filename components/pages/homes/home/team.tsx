import Link from 'next/link';

// Données des membres fondateurs YIRI TECH AFRICA
const yiriTeamData = [
  {
    id: 1,
    name: "François Mansaré",
    position: "Ingénieur Digital pour la Finance",
    description: "Spécialiste en transformation numérique des systèmes économiques africains",
    image: {
      src: "../../../../public/assets/img/team/francois-mansare.jpg" // À remplacer par la vraie image
    },
    social_link: [
      {
        icon: <i className="fab fa-linkedin-in"></i>,
        link: "#",
        target: "_blank"
      },
      {
        icon: <i className="fab fa-twitter"></i>,
        link: "#",
        target: "_blank"
      },
      {
        icon: <i className="fab fa-github"></i>,
        link: "#",
        target: "_blank"
      }
    ]
  },
  {
    id: 2,
    name: "Sidy Mohamed Salim Diallo",
    position: "Data & Software Engineer",
    description: "Expert en développement d'outils concrets à fort impact local",
    image: {
      src: "../../../../public/assets/img/team/sidy-diallo.jpg" // À remplacer par la vraie image
    },
    social_link: [
      {
        icon: <i className="fab fa-linkedin-in"></i>,
        link: "#",
        target: "_blank"
      },
      {
        icon: <i className="fab fa-twitter"></i>,
        link: "#",
        target: "_blank"
      },
      {
        icon: <i className="fab fa-github"></i>,
        link: "#",
        target: "_blank"
      }
    ]
  }
];

const Team = () => {
  return (
    <>
      <div className="team__two section-padding pt-0">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-60">
            <div className="col-xl-6 col-lg-7 col-md-9 team__two-title">
              <span className="subtitle-one">Équipe Fondatrice</span>
              <h2>Jeunes Ingénieurs Africains</h2>
            </div>
            <div className="col-xl-4 col-lg-4 text-lg-end mt-lg-0 mt-3">
              <Link href="/team" className="btn-one">
                Rejoignez-nous<i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            {yiriTeamData?.map((data, id) => (
              <div className="col-xl-6 col-lg-6 col-md-6" key={id}>
                <div className="team__two-team-item">
                  <img src={data.image.src} alt={`${data.name} - ${data.position}`} />
                  <div className="team__two-team-item-content">
                    <div className="member-name">
                      <h3>{data.name}</h3>
                      <span>{data.position}</span>
                      <p className="member-description">{data.description}</p>
                    </div>
                    <div className="fas fa-share-alt share-link-wrapper">
                      <div className="share-links">
                        {data.social_link.map((social, socialId) => (
                          <Link 
                            className="inner-link" 
                            key={socialId} 
                            href={social.link} 
                            target={social.target}
                          >
                            {social.icon}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Section supplémentaire pour mettre en avant leur parcours */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="team-mission">
                <h4>Notre Mission Commune</h4>
                <p>
                  Formés au Maroc, nous sommes convaincus que l'innovation locale est la clé 
                  d'un développement durable en Afrique. Notre approche combine expertise 
                  technique et connaissance du terrain pour créer des solutions adaptées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;