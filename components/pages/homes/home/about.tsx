import image1 from "../../../../public/assets/img/about/about-two.png";
import image2 from "../../../../public/assets/img/about/about-two-2.png";
import Link from "next/link";

const AboutTwo = () => {
  return (
    <>
      <div className="about__two section-padding">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-xl-6 col-lg-6">
              <div className="about__two-left">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-7 col-md-6 col-6">
                    <div className="about__two-left-image-left-side">
                      <img src={image1.src} alt="image" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-5 col-md-5 col-6">
                    <div className="about__two-left-right-image">
                      <img src={image2.src} alt="image" />
                    </div>
                    <div className="about__two-left-progressbar">
                      <div className="about__two-left-progressbar-wrapper">
                        <div className="about__two-left-progressbar-value">
                          <span>60%</span>
                        </div>
                        <h4 className="about__two-right-progressbar-title">Population africaine &lt; 25 ans</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__two-content">
                <span className="subtitle-one">Qui sommes-nous</span>
                <h2>La Tech au Service de la Renaissance Africaine</h2>
                <p>YIRI TECH AFRICA est une initiative lancée par de jeunes ingénieurs africains formés au Maroc, dans le but d'utiliser la technologie pour favoriser le développement et l'autonomie en Afrique, en particulier en Afrique subsaharienne.</p>
                <div className="about__two-content-service">
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Former les jeunes aux compétences tech les plus demandées</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Connecter les talents aux entreprises et opportunités</span>
                  </div>
                  <div className="service">
                    <i className="far fa-check-circle"></i>
                    <span>Accompagner les initiatives locales dans leur digitalisation</span>
                  </div>
                </div>
                <Link href="/about" className="btn-two">En Savoir Plus<i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;