import banner1 from "../../../../public/assets/img/banner/academy/academy-banner.jpg";
import bannerShape from "../../../../public/assets/img/shape/banner-shape.png";
import Link from "next/link";

const BannerAcademy = () => {
    return (
            <>
            <div className="banner__one"> 
                <div className="banner-shape">
                    <div className="shape banner-shape-1"></div>
                    <div className="shape banner-shape-2"></div>
                    <div className="shape banner-shape-3"></div>
                    <div className="shape banner-shape-4"></div>
                    <img className="shape banner-shape-5" src={bannerShape.src} alt="image" />
                    <div className="shape banner-shape-7"></div>
                    <div className="shape banner-shape-6"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__one-content">
                                <span className="subtitle-one">YIRI Academy</span>
                                <h2>Formez-vous aux <span>Compétences Tech</span> les Plus Demandées</h2>
                                <p>Formations pratiques en entreprenariat, développement, IA, leadership via ateliers, bootcamps et challenges </p>
                                <Link href="/contact" className="btn-two">Nous Contactez
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__one-image">
                                <div className="banner__one-image-wrapper">
                                    <div className="banner__one-image-wrapper-shapes animate-rotate">
                                        <div className="shape shape-1"></div>
                                        <div className="shape shape-2"></div>
                                    </div>
                                    <img src={banner1.src} alt="banner-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BannerAcademy;